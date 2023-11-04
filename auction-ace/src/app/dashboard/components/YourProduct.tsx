import React from 'react';
import prisma from '@/lib/prisma';
import { RiDeleteBin6Line } from "react-icons/ri";
import DeleteProduct from './DeleteProduct';

type Props = {
    userId: string;
};

export default async function YourProductChild(props: Props) {

    const products = await prisma.bid.findMany({
        where: {
          sellerId: props.userId,
        },
        orderBy: {
            amount: 'desc'
        },
        distinct: ['item']
      });
      
    return (
        <div className="flex items-center justify-center w-full p-2">
            <table className="w-full px-3 py-2 mx-auto md:w-4/5 md:m-5">
                <thead>
                    <tr>
                        <th className="text-sm md:text-lg text-center text-slate-50 bg-[#805D5D] font-normal">
                            Bidding ID
                        </th>
                        <th className="text-sm md:text-lg text-center text-slate-50 bg-[#805D5D] font-normal">
                            Product Name
                        </th>
                        <th className="text-sm md:text-lg text-center text-slate-50 bg-[#805D5D] font-normal">
                            Highest Bid
                        </th>
                        <th className="text-sm md:text-lg text-center text-slate-50 bg-[#805D5D] font-normal">
                            Auction End Time
                        </th>
                        <th className="text-sm md:text-lg text-center text-slate-50 bg-[#805D5D] font-normal">
                            <RiDeleteBin6Line />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((items) => (
                        <tr key={items.id}>
                            <td className="text-sm md:text-lg text-center">{items.id}</td>
                            <td className="text-sm md:text-lg text-center">{items.item}</td>
                            <td className="text-sm md:text-lg text-center">{items.amount}</td>
                            <td className="text-sm md:text-lg text-center">{items.timestamp.getDay() + '/' + items.timestamp.getMonth() + '/' + items.timestamp.getFullYear() + ' ' + items.timestamp.getHours() + ':' + items.timestamp.getMinutes()}</td>
                            <td className="text-sm md:text-lg text-center"><DeleteProduct id={items.itemId} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
