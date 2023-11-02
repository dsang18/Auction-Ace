import prisma from "./prisma";

export default async function queries() {
    const prodId = '653c8271f1895d88b436b300'
    const buyerId = 'kp_5998818d0c584c6ba499b207885fe759'
    const sellerId = 'kp_b1c3eb0997554226bb4a881ab6af92a0'
    
    // const bidderTendency = await prisma.bid.groupBy({
    //     by: "bidderId",
    //     _count: {
    //         _all: true
    //     }
    // })

    const bidderTendencyNum = await prisma.bid.findMany({
        where: {
            bidderId: buyerId
        },
        distinct: ['sellerId']
    })

    const bidderTendencyDen = await prisma.item.findMany({
        distinct: ['sellerId']
    })

    const successiveBidNum =  await prisma.bid.groupBy({
        by: ['itemId', 'bidderId']
    })

    // console.log(successiveBidNum);
    

    const biddingRatioNum = await prisma.bid.groupBy({
        by: "bidderId",
        where: {
            itemId: prodId
        },
        _count: {
            id: true
        }
    })

    console.log(bidderTendencyNum,bidderTendencyDen,successiveBidNum,biddingRatioNum)
}

export const bidderTendency = async (buyerId: string) => {
    const bidderTendencyNum = await prisma.bid.findMany({
        where: {
            bidderId: buyerId
        },
        distinct: ['sellerId']
    })

    const bidderTendencyDen = await prisma.item.findMany({
        distinct: ['sellerId']
    })
    return (
        [bidderTendencyNum.length, bidderTendencyDen.length]
    )
}

export const biddingRatio = async (prodId: string, buyerId: string) => {
    // const biddingRatioNum = await prisma.bid.groupBy({
    //     by: "bidderId",
    //     where: {
    //         itemId: prodId
    //     },
    //     _count: {
    //         id: true
    //     }
    // })

    const biddingRatioNum = await prisma.bid.findMany({
        where: {
            itemId: prodId,
            bidderId: buyerId
        }
    })

    const biddingRatioDen = await prisma.bid.findMany({
        where: {
            itemId: prodId
        }
    })
    return [biddingRatioNum, biddingRatioDen]
}

export const successiveOutbid = async (itemId: string, bidderId: string) => {
    // Number of successive outbids in all of the products
    const successiveOutbidNum = await prisma.bid.findMany({
        where: {
            itemId: itemId
        }
    })
    for (let i = 1; i < successiveOutbidNum.length; i++) {
        if (successiveOutbidNum[i]['bidderId'] === successiveOutbidNum[i - 1]['bidderId']) {
            return true;
        }
    }
    return false;
}

export const winningRatio = async () => {
    return ""
}