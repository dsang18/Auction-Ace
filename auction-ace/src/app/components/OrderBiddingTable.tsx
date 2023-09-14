
export default function OrderBiddingTable() {
    const order_bidding_data ={}

  return (

            <table className="w-full px-3 py-2 md:w-4/5 md:m-5">
                <tr>
                    <th className="text-sm md:text-lg text-center text-slate-50 bg-[#805D5D] font-normal">Bidding ID</th>
                    <th className="text-sm md:text-lg text-center text-slate-50 bg-[#805D5D] font-normal">Bidding Amount</th>
                    <th className="text-sm md:text-lg text-center text-slate-50 bg-[#805D5D] font-normal">Highest Bid</th>
                    <th className="text-sm md:text-lg text-center text-slate-50 bg-[#805D5D] font-normal">Status</th>
                    <th className="text-sm md:text-lg text-center text-slate-50 bg-[#805D5D] font-normal">Action</th>
                </tr>
                <tr>
                    <td className="text-sm md:text-lg text-center">None</td>
                    <td className="text-sm md:text-lg text-center">None</td>
                    <td className="text-sm md:text-lg text-center">None</td>
                    <td className="text-sm md:text-lg text-center">None</td>
                    <td className="text-sm md:text-lg text-center">None</td>
                </tr>
            </table>
  )
}
``