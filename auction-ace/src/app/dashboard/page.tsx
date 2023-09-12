import Section from "../components/Section"

export default function page() {
  return (
    <div>
        <Section section_name1={"Dashboard"} section_name2={"Darshboard"}/>

        <div className='flex items-center justify-around w-1/5 flex-col'>
            <button className='bg-[#e3af46] px-2 py-1 text-center text-lg rounded-lg my-2 w-3/4'>Dashboard</button>
            <button className='bg-slate-50 border-[1.5px] border-gray-500 px-2 py-1 text-center text-lg rounded-lg my-2 w-3/4'>My Profile</button>
            <button className='bg-slate-50 border-[1.5px] border-gray-500 px-2 py-1 text-center text-lg rounded-lg my-2 w-3/4'>Order Bidding</button>
            <button className='bg-slate-50 border-[1.5px] border-gray-500 px-2 py-1 text-center text-lg rounded-lg my-2 w-3/4'>Purchasing</button>
            <button className='bg-slate-50 border-[1.5px] border-gray-500 px-2 py-1 text-center text-lg rounded-lg my-2 w-3/4'>Logout</button>
        </div>

    </div>
  )
}
