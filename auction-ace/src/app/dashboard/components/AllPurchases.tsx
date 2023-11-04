import prisma from "@/lib/prisma";
import { RiDeleteBin6Line } from "react-icons/ri";
import DeleteBid from "./DeleteBid";

type Props = {
    userId: string;
}

export default async function AllPurchases(props: Props) {
    const purchaseData = await prisma.bid.findMany({
        where: {
            bidderId: props.userId
        }
    });
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
                                Bidding Item
                            </th>
                            <th className="text-center text-slate-50 bg-[#805D5D] font-normal">
                                Amount
                            </th>
                            <th className="text-center text-slate-50 bg-[#805D5D] font-normal">
                                Time
                            </th>
                            <th className="text-center text-slate-50 bg-[#805D5D] font-normal">
                                <RiDeleteBin6Line />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {purchaseData.map((item) => (
                            <tr className="" key={item.id}>
                                <td className="text-center">{item.id}</td>
                                <td className="text-center">{item.item}</td>
                                <td className="text-center">{item.amount}</td>
                                <td className="text-center">{item.timestamp.getDate() + '/' + item.timestamp.getMonth() + '/' + item.timestamp.getFullYear()}</td>
                                <DeleteBid id={item.id} />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
