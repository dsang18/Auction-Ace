import React from 'react'
import Image from 'next/image';
import paint_auction from 'public/painting-auction.png';
import Link from 'next/link';

export default function HomeImage() {
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
