import React from 'react'
import Image from 'next/image';
import paint_auction from 'public/painting-auction.png';
import Link from 'next/link';
import prisma from '@/lib/prisma';
import { bidderTendency, biddingRatio, successiveOutbid } from '@/lib/prismaQueries';

export default async function HomeImage() {
    // const successiveBidNum =  await prisma.bid.groupBy({
    //     by: ['itemId'],
    //     where: {
    //         bidderId:'kp_5998818d0c584c6ba499b207885fe759'
    //     },
    // })
    // const successiveBidNum = await prisma.bid.findMany({
    //     where: {
    //         bidderId: 'kp_5998818d0c584c6ba499b207885fe759'
    //     }
    // })
    // console.log(successiveBidNum);
    
    const bidderTendencyOutput = await bidderTendency('kp_5998818d0c584c6ba499b207885fe759')
    const biddingRatioOutput = await biddingRatio('653c8271f1895d88b436b300', 'kp_5998818d0c584c6ba499b207885fe759')
    const successiveOutbidOutput = await successiveOutbid('653c8271f1895d88b436b300', 'kp_5998818d0c584c6ba499b207885fe759')
    // console.log(bidderTendencyOutput);
    // console.log(biddingRatioOutput);
    // console.log(successiveOutbidOutput); 
    
    
    return (
    <div>
      <Image src={paint_auction} width={1300}  height={100} alt="background" className='brightness-[0.5] w-screen h-screen absolute opacity-90'></Image>
        <div className='flex items-center justify-center flex-col relative w-full h-screen'>
            <h2 className='text-3xl text-white text-center my-3'>Welcome to Auction Ace</h2>
            <h2 className='text-5xl text-white font-medium text-center my-3'>Build,Sell & Collect <br></br>Items</h2>
            <Link href={"#HomeCategories"} className='text-xl text-slate-50 bg-[#E3AF46] px-5 py-2 rounded-lg my-4'>Start Exploring</Link>
        </div>
        
    </div>
  )
}
