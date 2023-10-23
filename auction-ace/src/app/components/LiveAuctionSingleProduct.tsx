import Image from 'next/image';
import Link from 'next/link';
import Auction from "../../../public/USPA_white_shoes.png"

type Props = {
    name: string;
    image: string;
    price: number;
    desc: string;
};

export default function LiveAuctionSingleProduct(props: Props) {
    return (
        <div className="flex items-start m-3 border border-gray-300 rounded-md flex-col w-full">
            <Image
                // src="/_next/static/media/USPA_white_shoes.77c6ce22.png"
                src="/auction.png"
                alt="Shoes"
                className="rounded-sm"
                width={500}
                height={500}
            />

            <div className="flex items-start p-2 flex-col my-2">
                <h3 className="text-lg font-semibold text-start">
                    {props.name}
                </h3>
                <div className="flex items-start">
                    <h3 className="text-md text-gray-500">Bidding Price:</h3>
                    <h3 className="text-lg font-semibold">{props.price}</h3>
                </div>
            </div>
            {/* Buttons */}
            <div className="flex items-center justify-around w-full pb-4">
                {/* href="/single_product" */}
                <button className="text-md w-2/5 text-gray-900 px-2 py-1 rounded-md font-medium bg-[#E3AF46]">
                    Place Bid
                </button>
                <button className="text-md w-2/5 text-slate-100 px-2 py-1 rounded-md font-medium bg-[#805D5D]">
                    Know More
                </button>
            </div>
        </div>
    );
}
