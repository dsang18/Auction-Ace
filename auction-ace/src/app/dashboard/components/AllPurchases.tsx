import React from 'react';

type Props = {
    userId: string;
}

export default function AllPurchases(props: Props) {
    return (
        <section>
            <div className="flex items-center justify-center w-full p-2">
                <table className="w-full p-2 md:w-4/5 m-5">
                    <thead>
                        <tr>
                            <th className="text-center text-slate-50 bg-[#805D5D] font-normal">
                                Bidding ID
                            </th>
                            <th className="text-center text-slate-50 bg-[#805D5D] font-normal">
                                Bidding Amount
                            </th>
                            <th className="text-center text-slate-50 bg-[#805D5D] font-normal">
                                Status
                            </th>
                            <th className="text-center text-slate-50 bg-[#805D5D] font-normal">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center">None</td>
                            <td className="text-center">None</td>
                            <td className="text-center">None</td>
                            <td className="text-center">None</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}
