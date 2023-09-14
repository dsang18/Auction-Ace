"use client"
import { useState, useEffect } from "react"

export default function DashboardSections(props) {
    const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

    useEffect(()=>{
        let sectionActive = props.section_active
    let elem = document.getElementById(sectionActive)
    elem.classList.add('bg-[#e3af46]')
    elem.classList.remove('border-[1.5px]','border-gray-500', 'bg-slate-50')

    elem.onload = () => {

    };
 }, []);

    

    return (
        <div>
            <div className='flex items-center justify-around w-full flex-wrap'>
                <button className='text-md bg-slate-50 border-[1.5px] border-gray-500 px-2 py-1 text-center text-lg rounded-lg my-2 w-2/5 lg:m-2 lg:w-1/5' id='dashboard'>Dashboard</button>
                <button className='text-md bg-slate-50 border-[1.5px] border-gray-500 px-2 py-1 text-center text-lg rounded-lg my-2 w-2/5 lg:m-2 lg:w-1/5' id='myprofile'>My Profile</button>
                <button className='text-md bg-slate-50 border-[1.5px] border-gray-500 px-2 py-1 text-center text-lg rounded-lg my-2 w-2/5 lg:m-2 lg:w-1/5' id='orderbidding'>Order Bidding</button>
                <button className='text-md bg-slate-50 border-[1.5px] border-gray-500 px-2 py-1 text-center text-lg rounded-lg my-2 w-2/5 lg:m-2 lg:w-1/5' id='purchasing'>Purchasing</button>
            </div>

        </div>
    )
}
