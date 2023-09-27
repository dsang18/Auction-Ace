import shoes from 'public/USPA_white_shoes.png';
import {AiOutlineDown} from 'react-icons/ai';
import LiveAuctionSingleProduct from './LiveAuctionSingleProduct';


export default function LiveAuction() {
    let prod_details = [
        {
            prod_name: "Black and White Shoes",
            prod_image: shoes.src,
            prod_bid_price: 89.00,
        },
        {
            prod_name: "Black and White Shoes",
            prod_image: shoes.src,
            prod_bid_price: 89.00,
        },
    ] 

  return (
    <div className='my-4'>
        <div>
            <h3 className='text-3xl  text-center'>Live Auctions</h3>
            <h3 className='text-lg text-center'>Join the world's best auctions for one-of-a-kind art, antiques & luxury goods.</h3>
        </div>
        {/* live auction main container */}
        <div className='grid place-items-center justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3 w-full'>
            {prod_details.map((i)=>(
                <LiveAuctionSingleProduct name={i.prod_name} image={i.prod_image} price={i.prod_bid_price}></LiveAuctionSingleProduct>
            ))}
            </div>
        <div className='flex items-center justify-center w-full pb-4'>
                        <button className='text-lg text-gray-900 px-4 py-1 rounded-md font-medium bg-[#E3AF46] flex flex-row items-center'>View More<AiOutlineDown className="text-md mt-1 ml-2" /></button>
                    </div>
            
    </div>
  )
}
