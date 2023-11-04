'use server';

import { z } from 'zod';
import prisma from './prisma';
import { revalidatePath } from 'next/cache';
import { BidFormDataSchema, AddProductFormDataSchemaServer } from './zodSchema';

type Inputs = z.infer<typeof BidFormDataSchema>;

type AddProductInput = z.infer<typeof AddProductFormDataSchemaServer>;


export async function getHighestBid(prod_id:string){
    const response = await prisma.bid.findMany({
        where: {
            itemId: prod_id
        },
        orderBy: {
            amount: "desc"
          },
          take: 1
    })
    return response[0].amount
}


export async function addEntry(data: Inputs) {
    const result = BidFormDataSchema.safeParse(data);

    if (result.success) {
        if(parseInt(result.data.bid)>await getHighestBid(result.data.prodId)){
            await prisma.bid.create({
                data: {
                    bidder: result.data.userName,
                    bidderId: result.data.userId,
                    amount: parseInt(result.data.bid),
                    itemId: result.data.prodId,
                    sellerId: result.data.sellerId,
                    item: result.data.prodName
                }
            })
            revalidatePath('/products')
            return { success: true, data: result.data };
        }
        else{
            return { success: false, error: "The bid should be greater than the highest bid" }
        }
    }

    if (result.error) {
        return { success: false, error: result.error.format() };
    }
}

export async function addProduct(data: AddProductInput) {
    const result = AddProductFormDataSchemaServer.safeParse(data);

    if (result.success) {
        await prisma.item.create({
            data: {
                itemName: result.data.prodName,    
                description: result.data.description,
                images: result.data.images,      
                initialBid: result.data.price, 
                AuctionEndTime: result.data.auctionEndTime,
                seller: result.data.sellerName,      
                sellerId: result.data.sellerId, 
            }
        })
        const itemData = await prisma.item.findFirst({
            where: {
                itemName: result.data.prodName
            }
        })
        await prisma.bid.create({
            data: {
                bidder: result.data.sellerName,
                bidderId: result.data.sellerId,
                amount: result.data.price,
                // @ts-ignore
                itemId: itemData.id,
                sellerId: result.data.sellerId,
                item: result.data.prodName,
            }
        })
        revalidatePath('/products')
        console.log("Successful in adding product");
        return { success: true, data: result.data };
    }

    if (result.error) {
        console.log("Failed to add product");
        return { success: false, error: result.error.format() };
    }
}


export async function removePurchase (id: string) {
    await prisma.bid.delete({
        where: {
            id: id
        }
    })
    return {success:true}
}

export async function removeProduct (id: string) {
    await prisma.item.delete({
        where: {
            id: id
        }
    })
    await prisma.bid.deleteMany({
        where: {
            itemId: id
        }
    })
    return {success:true}
}