'use server';

import { z } from 'zod';
import prisma from './prisma';
import { revalidatePath } from 'next/cache';
import { BidFormDataSchema, AddProductFormDataSchema } from './zodSchema';

type Inputs = z.infer<typeof BidFormDataSchema>;

type AddProductInput = z.infer<typeof AddProductFormDataSchema>;

export async function addEntry(data: Inputs) {
    const result = BidFormDataSchema.safeParse(data);

    if (result.success) {
        await prisma.bid.create({
            data: {
                bidder: result.data.userName,
                bidderId: result.data.userId,
                amount: parseInt(result.data.bid),
                itemId: result.data.prodId
            }
        })
        revalidatePath('/products')
        return { success: true, data: result.data };
    }

    if (result.error) {
        return { success: false, error: result.error.format() };
    }
}

export async function addProduct(data: AddProductInput) {
    const result = AddProductFormDataSchema.safeParse(data);

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
        console.log(result.data);
        revalidatePath('/products')
        return { success: true, data: result.data };
    }

    if (result.error) {
        return { success: false, error: result.error.format() };
    }
}
