import shoes from 'public/shoes.jpg';
import Image from 'next/image';
import {AiOutlineDown} from 'react-icons/ai';


export default function LiveAuction() {
    const single_prod = 
                
                <div className='flex items-start p-2 flex-col my-2'>
                    <h3 className='text-lg font-semibold'>Nike Shoes</h3>
                    <div className='flex items-center'>
                        <h3 className='text-md text-gray-500'>Bidding Price:</h3>
                        <h3 className='text-lg font-semibold'>$99</h3>
                    </div>
                </div>
                {/* Buttons */}
                    <div className='flex items-center justify-around w-full pb-4'>
                        <button className='text-md text-gray-900 px-2 py-1 rounded-md font-medium bg-[#E3AF46]'>Place Bid</button>
                        <button className='text-md text-slate-100 px-2 py-1 rounded-md font-medium bg-[#805D5D]'>Know More</button>
                    </div>


  return (
    <div className='my-4'>
        <div>
            <h3 className='text-3xl  text-center'>Live Auctions</h3>
            <h3 className='text-lg text-center'>Join the world's best auctions for one-of-a-kind art, antiques & luxury goods.</h3>
        </div>
        {/* live auction main container */}
        <div className='grid place-items-center justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-3 w-full'>

            {/* single product card*/}
            <div className='flex items-center m-3 border border-gray-300 rounded-md flex-col w-full '>
                
                <Image src={shoes} alt="Shoes" className='rounded-sm min-w-full'></Image>
                
                <div className='flex items-start p-2 flex-col my-2'>
                    <h3 className='text-lg font-semibold'>Nike Shoes</h3>
                    <div className='flex items-center'>
                        <h3 className='text-md text-gray-500'>Bidding Price:</h3>
                        <h3 className='text-lg font-semibold'>$99</h3>
                    </div>
                </div>
                {/* Buttons */}
                    <div className='flex items-center justify-around w-full pb-4'>
                        <button className='text-md text-gray-900 px-2 py-1 rounded-md font-medium bg-[#E3AF46]'>Place Bid</button>
                        <button className='text-md text-slate-100 px-2 py-1 rounded-md font-medium bg-[#805D5D]'>Know More</button>
                    </div>

                
            </div>


            {/* single product card*/}
            <div className='flex items-center m-3 border border-gray-300 rounded-md flex-col w-full'>
                
                <Image src={shoes} alt="Shoes" className='rounded-sm min-w-full'></Image>
                
                <div className='flex items-start p-2 flex-col my-2'>
                    <h3 className='text-lg font-semibold'>Nike Shoes</h3>
                    <div className='flex items-center'>
                        <h3 className='text-md text-gray-500'>Bidding Price:</h3>
                        <h3 className='text-lg font-semibold'>$99</h3>
                    </div>
                </div>
                {/* Buttons */}
                    <div className='flex items-center justify-around w-full pb-4'>
                        <button className='text-md text-gray-900 px-2 py-1 rounded-md font-medium bg-[#E3AF46]'>Place Bid</button>
                        <button className='text-md text-slate-100 px-2 py-1 rounded-md font-medium bg-[#805D5D]'>Know More</button>
                    </div>

                
            </div>


            {/* single product card*/}
            <div className='flex items-center m-3 border border-gray-300 rounded-md flex-col w-full'>
                
                <Image src={shoes} alt="Shoes" className='rounded-sm min-w-full'></Image>
                
                <div className='flex items-start p-2 flex-col my-2'>
                    <h3 className='text-lg font-semibold'>Nike Shoes</h3>
                    <div className='flex items-center'>
                        <h3 className='text-md text-gray-500'>Bidding Price:</h3>
                        <h3 className='text-lg font-semibold'>$99</h3>
                    </div>
                </div>
                {/* Buttons */}
                    <div className='flex items-center justify-around w-full pb-4'>
                        <button className='text-md text-gray-900 px-2 py-1 rounded-md font-medium bg-[#E3AF46]'>Place Bid</button>
                        <button className='text-md text-slate-100 px-2 py-1 rounded-md font-medium bg-[#805D5D]'>Know More</button>
                    </div>

                
            </div>

            {/* single product card*/}
            <div className='flex items-center m-3 border border-gray-300 rounded-md flex-col w-full'>
                
                <Image src={shoes} alt="Shoes" className='rounded-sm min-w-full'></Image>
                
                <div className='flex items-start p-2 flex-col my-2'>
                    <h3 className='text-lg font-semibold'>Nike Shoes</h3>
                    <div className='flex items-center'>
                        <h3 className='text-md text-gray-500'>Bidding Price:</h3>
                        <h3 className='text-lg font-semibold'>$99</h3>
                    </div>
                </div>
                {/* Buttons */}
                    <div className='flex items-center justify-around w-full pb-4'>
                        <button className='text-md text-gray-900 px-2 py-1 rounded-md font-medium bg-[#E3AF46]'>Place Bid</button>
                        <button className='text-md text-slate-100 px-2 py-1 rounded-md font-medium bg-[#805D5D]'>Know More</button>
                    </div>

                
            </div>

            {/* single product card*/}
            <div className='flex items-center m-3 border border-gray-300 rounded-md flex-col w-full'>
                
                <Image src={shoes} alt="Shoes" className='rounded-sm min-w-full'></Image>
                
                <div className='flex items-start p-2 flex-col my-2'>
                    <h3 className='text-lg font-semibold'>Nike Shoes</h3>
                    <div className='flex items-center'>
                        <h3 className='text-md text-gray-500'>Bidding Price:</h3>
                        <h3 className='text-lg font-semibold'>$99</h3>
                    </div>
                </div>
                {/* Buttons */}
                    <div className='flex items-center justify-around w-full pb-4'>
                        <button className='text-md text-gray-900 px-2 py-1 rounded-md font-medium bg-[#E3AF46]'>Place Bid</button>
                        <button className='text-md text-slate-100 px-2 py-1 rounded-md font-medium bg-[#805D5D]'>Know More</button>
                    </div>

                
            </div>
        </div>

        <div className='flex items-center justify-center w-full pb-4'>
                        <button className='text-lg text-gray-900 px-4 py-1 rounded-md font-medium bg-[#E3AF46] flex flex-row items-center'>View More<AiOutlineDown className="text-md mt-1 ml-2" /></button>
                    </div>
            
    </div>
  )
}
