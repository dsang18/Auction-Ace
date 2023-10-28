import prod_img1 from 'public/USPA_white_shoes.png';
import Image from 'next/image';
import Reviews from '../../../components/Reviews';
import BidForm from './BidForm';
import Link from 'next/link';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

type Props = {
    prodId: string;
    name: string;
    seller: string;
    price: number;
    desc: string;
    images: string;
};

export default async function Product_Details(props: Props) {
    const { getUser, getPermission } = getKindeServerSession();
    const user = await getUser();
    if (user.given_name === null || user.id === null || user.family_name === null) {
        throw new Error('Something Went Wrong! Please try again');
    }
    return (
        <div className="flex items-center justify-center p-2 px-16 flex-wrap w-full md:justify-start">
            <div className="flex items-center justify-between p-2 w-full md:w-1/2">
                {/* <div className="flex items-center justify-around p-2 flex-col w-1/3 sm:w-1/3">
                    <Image
                        src={prod_img1}
                        alt="Product"
                        className="my-2 w-full"
                    ></Image>
                    <Image
                        src={prod_img1}
                        alt="Product"
                        className="my-2 w-full"
                    ></Image>
                    <Image
                        src={prod_img1}
                        alt="Product"
                        className="my-2 w-full"
                    ></Image>
                </div> */}
                <Image
                    src={props.images}
                    alt="Product"
                    className="my-2 w-2/3 sm:w-2/3 h-80 object-cover"
                    width={400}
                    height={400}
                ></Image>
            </div>

            {/* product description container */}
            <div className="flex justify-center flex-col w-full sm:w-4/5 md:w-1/2 lg:w-2/5 md:px-2">
                <p className="w-full text-xl text-gray-900 font-semibold">
                    {props.name}
                </p>
                <p className="w-full text-md text-gray-600">{props.seller}</p>
                <p className="w-full text-sm text-gray-900 text-justify line-clamp-2">
                    {props.desc}
                </p>
                <Link
                    href={'#description'}
                    className="underline underline-offset-2 font-extralight text-sm text-gray-700 hover:text-black"
                >
                    Know More
                </Link>
                <p className="w-full text-xl text-gray-900 text-center my-2">
                    Bidding Price:
                    <span className="ml-2 font-semibold">₹{props.price}</span>
                </p>

                {/* Bid now container */}
                <div className="flex items-start justify-start p-2 flex-col my-3 shadow-lg w-full border-[1.5px] border-gray-300 rounded-lg sm:w-3/4 md:w-full sm:p-4 bg-white">
                    <p className="text-lg font-semibold text-gray-900">
                        Bid Now
                    </p>
                    <p className="text-md text-gray-900">
                        Bid Multiple: ₹100.00
                    </p>
                    <hr className="w-1/3 bg-gray-900 my-4 h-[0.1rem]"></hr>

                    <BidForm
                        access={getPermission('dashboard:access').isGranted}
                        userId={user.id}
                        userName={user.given_name+" "+user.family_name}
                        prodId={props.prodId}
                        price={props.price}
                    />
                </div>
            </div>

            {/* Description and bidding history buttons */}
            <div
                id="description"
                className="flex items-start justify-start w-full flex-col"
            >
                <div className="flex items-start justify-around w-full lg:w-1/3">
                    <button className="bg-[#e3af46] py-1 text-center text-lg rounded-md px-4">
                        Description
                    </button>
                    {/* <button className="bg-slate-50 border-[1.5px] border-gray-500 py-1 text-center text-lg rounded-md px-4">
                        Bidding History
                    </button> */}
                </div>

                {/* Description subsection */}
                <div className="flex items-center justify-center w-full md:w-full lg:w-3/5 flex-col p-2 my-2 md:mx-4">
                    {/* <p className='w-full text-xl text-gray-900 font-semibold'>USPA white shoes with black accent</p> */}
                    <p className="w-full text-sm text-gray-900 text-justify">
                        {props.desc}
                    </p>
                </div>
            </div>

            <Reviews />
        </div>
    );
}
