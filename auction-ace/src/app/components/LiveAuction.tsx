import shoes from 'public/USPA_white_shoes.png';
import { AiOutlineDown } from 'react-icons/ai';
import LiveAuctionSingleProduct from './LiveAuctionSingleProduct';
import Link from 'next/link';
import prisma from '@/lib/prisma';

export default async function LiveAuction() {
    let prod_details = [
        {
            id: 1,
            prod_name: 'Black and White Shoes',
            prod_image: shoes.src,
            prod_bid_price: 89.0,
        },
        {
            id: 2,
            prod_name: 'Black and White Shoes',
            prod_image: shoes.src,
            prod_bid_price: 89.0,
        },
        {
            id: 3,
            prod_name: 'Black and White Shoes',
            prod_image: shoes.src,
            prod_bid_price: 89.0,
        },
        {
            id: 4,
            prod_name: 'Black and White Shoes',
            prod_image: shoes.src,
            prod_bid_price: 89.0,
        },
    ];

    // const itemDetails = await prisma.item.findMany({
    //     take: 4
    // })
    
    return (
        <div className="my-4" id="LiveAuction">
            <div>
                <h3 className="text-3xl  text-center">Live Auctions</h3>
                <h3 className="text-lg text-center">
                    Join the world's best auctions for one-of-a-kind art,
                    antiques & luxury goods.
                </h3>
            </div>
            {/* live auction main container */}
            <div className="grid place-items-center justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6 p-3 w-full">
                {/* {await itemDetails.map((item) => (
                    <Link href={'/single_product'} key={item.id}>
                        <LiveAuctionSingleProduct
                            name={item.itemName}
                            image={item.images}
                            price={item.initialBid}
                        ></LiveAuctionSingleProduct>
                    </Link>
                ))} */}
                {prod_details.map((item)=>(
                    <Link href={'/single_product'} key={item.id}>
                        <LiveAuctionSingleProduct
                            name={item.prod_name}
                            image={item.prod_image}
                            price={item.prod_bid_price}
                        ></LiveAuctionSingleProduct>
                    </Link>
                ))}
            </div>
            <div id="ViewMoreDiv"></div>
            <div className="flex items-center justify-center w-full pb-4">
                <button
                    className="text-lg text-gray-900 px-4 py-1 rounded-md font-medium bg-[#E3AF46] flex flex-row items-center"
                >
                    View More
                    <AiOutlineDown className="text-md mt-1 ml-2" />
                </button>
            </div>
        </div>
    );
}
