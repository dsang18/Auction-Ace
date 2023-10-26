import React from 'react';
import prisma from '@/lib/prisma';

type Props = {
    userId: string;
}

export default async function OrderBidding(props: Props) {
    const products = await prisma.item.findMany({
        where: {
            sellerId: props.userId
        }
    })

    return (
        <section>
            <div className="flex items-center justify-center w-full p-2">
                <table className="w-full px-3 py-2 mx-auto md:w-4/5 md:m-5">
                    <thead>
                        <tr>
                            <th className="text-sm md:text-lg text-center text-slate-50 bg-[#805D5D] font-normal">
                                Bidding ID
                            </th>
                            <th className="text-sm md:text-lg text-center text-slate-50 bg-[#805D5D] font-normal">
                                Bidding Amount
                            </th>
                            <th className="text-sm md:text-lg text-center text-slate-50 bg-[#805D5D] font-normal">
                                Highest Bid
                            </th>
                            <th className="text-sm md:text-lg text-center text-slate-50 bg-[#805D5D] font-normal">
                                Status
                            </th>
                            <th className="text-sm md:text-lg text-center text-slate-50 bg-[#805D5D] font-normal">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-sm md:text-lg text-center">
                                None
                            </td>
                            <td className="text-sm md:text-lg text-center">
                                None
                            </td>
                            <td className="text-sm md:text-lg text-center">
                                None
                            </td>
                            <td className="text-sm md:text-lg text-center">
                                None
                            </td>
                            <td className="text-sm md:text-lg text-center">
                                None
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}
