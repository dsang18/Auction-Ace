import shoes from 'public/USPA_white_shoes.png';
import shoes2 from 'public/productImages/AdidasShoes.jpg';
import { AiOutlineDown } from 'react-icons/ai';
import LiveAuctionSingleProduct from './LiveAuctionSingleProduct';
import Link from 'next/link';
import prisma from '@/lib/prisma';
import Image from 'next/image';
import ProductBidTime from './ProductBidTime';

export default async function LiveAuction() {

    


    // let prod_details = [
    //     {
    //         id: 1,
    //         prod_name: 'Black and White Shoes',
    //         prod_image: shoes.src,
    //         prod_bid_price: 89.0,
    //     },
    //     {
    //         id: 2,
    //         prod_name: 'Black and White Shoes',
    //         prod_image: shoes2.src,
    //         prod_bid_price: 89.0,
    //     },
    //     {
    //         id: 3,
    //         prod_name: 'Black and White Shoes',
    //         prod_image: shoes.src,
    //         prod_bid_price: 89.0,
    //     },
    //     {
    //         id: 4,
    //         prod_name: 'Black and White Shoes',
    //         prod_image: shoes.src,
    //         prod_bid_price: 89.0,
    //     },
    // ];

    // console.log(prod_details);

    // const itemDetails = await prisma.item.findMany({
    //     take: 4,
    // });
    const itemDetails = await prisma.item.findMany();
    
    // console.log(itemDetails);

    // const itemDetails = await prisma.item.findMany({ take: 10 })

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
                {itemDetails.map((item) => (
                    // <Link href={'/single_product'} key={item.id}>
                    //     <LiveAuctionSingleProduct
                    //         name={item.itemName}
                    //         image={item.images}
                    //         price={item.initialBid}
                    //         desc={item.description}
                    //     ></LiveAuctionSingleProduct>
                    // </Link>
                    <div key={item.id} className="flex items-start m-3 border border-gray-300 rounded-md flex-col w-full">
                        <Image
                            // src="/_next/static/media/USPA_white_shoes.77c6ce22.png"
                            src={item.images}
                            alt="Shoes"
                            className="rounded-sm h-64 object-cover"
                            width={500}
                            height={500}
                        />

                        <div className="flex items-start pt-2 pb-4 px-4 flex-col my-2">
                            <h3 className="text-lg font-semibold text-start">
                                {item.itemName}
                            </h3>
                            <div className="flex items-center">
                            <h3 className="text-md text-gray-500">
                                    Time Left:
                                </h3>
                            <ProductBidTime endTime={item.AuctionEndTime}/>
                            </div>
                            
                            <div className="flex items-center">
                                <h3 className="text-md text-gray-500">
                                    Bidding Price:
                                </h3>
                                <h3 className="text-lg font-semibold">
                                    {item.initialBid}
                                </h3>
                            </div>
                            <p className='line-clamp-3 font-extralight text-sm text-gray-600'>{item.description}</p>
                        </div>
                        {/* Buttons */}
                        <div className="flex items-center justify-around w-full pb-4 mb-4">
                            {/* href="/single_product" */}
                            <Link href={`/products/${item.id}`} className="text-md w-2/5 text-gray-900 px-2 py-1 rounded-md font-medium bg-[#E3AF46]">
                                Place Bid
                            </Link>
                            <Link href={`/products/${item.id}`} className="text-md w-2/5 text-slate-100 px-2 py-1 rounded-md font-medium bg-[#805D5D]">
                                Know More
                            </Link>
                        </div>
                    </div>
                ))}
                {/* {prod_details.map((item)=>(
                    <Link href={'/single_product'} key={item.id}>
                        <LiveAuctionSingleProduct
                            name={item.prod_name}
                            image={item.prod_image}
                            price={item.prod_bid_price}
                        ></LiveAuctionSingleProduct>
                    </Link>
                ))} */}
            </div>
            {/* <div id="ViewMoreDiv"></div>
            <div className="flex items-center justify-center w-full pb-4">
                <button className="text-lg text-gray-900 px-4 py-1 rounded-md font-medium bg-[#E3AF46] flex flex-row items-center">
                    View More
                    <AiOutlineDown className="text-md mt-1 ml-2" />
                </button>
            </div> */}
        </div>
    );
}
