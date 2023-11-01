import React from 'react';
import prisma from '@/lib/prisma';

type Props = {
    userId: string;
};

export default async function YourProductChild(props: Props) {
    // const products = await prisma.bid.groupBy({
    //     by: ['itemId'],
    //     where: {
    //       sellerId: props.userId,
    //     },
    //     _max: {
    //       amount: true,
    //     }
    //   });

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
                            Bid Time
                        </th>
                        {/* <th className="text-sm md:text-lg text-center text-slate-50 bg-[#805D5D] font-normal">
                            Action
                        </th> */}
                    </tr>
                </thead>
                <tbody>
                    {products.map((items) => (
                        <tr key={items.id}>
                            <td className="text-sm md:text-lg text-center">{items.id}</td>
                            <td className="text-sm md:text-lg text-center">{items.item}</td>
                            <td className="text-sm md:text-lg text-center">{items.amount}</td>
                            <td className="text-sm md:text-lg text-center">{items.timestamp.getDay() + '/' + items.timestamp.getMonth() + '/' + items.timestamp.getFullYear()}</td>
                            {/* <td className="text-sm md:text-lg text-center">None</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
