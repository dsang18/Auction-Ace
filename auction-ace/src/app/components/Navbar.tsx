import React from 'react'
import Logo from './Logo'
import {AiOutlineSearch} from 'react-icons/ai';
import HomeCategories from './HomeCategories';


export default function Navbar() {
  return (
    <div className='flex items-center justify-around flex-row bg-[#FFFDFB] absolute w-screen md:w-full z-10'>
      <Logo/> 
      <form className='w-full flex items-center justify-around flex-row '>
        <div className='relative w-3/5 md:w-3/5 flex items-center justify-end'>
            <AiOutlineSearch className='absolute mr-2 text-2xl' />
            <input type="text" placeholder='Search Auction Ace' className='w-full px-2 py-1 text-md rounded-lg border-[1.5px] border-[#938f8f]'></input>
        </div>
        
        
        <div className="flex items-center justify-around flex-row w-3/5 md:w-1/5">
          <button className='sm:text-sm md:text-md text-slate-50 bg-[#E3AF46]  px-3 lg:px-6 py-2 rounded-lg '>Login</button>
          <button className='sm:text-sm md:text-md text-slate-50 bg-[#E3AF46] px-3 py-2 lg:px-6 rounded-lg '>Sign Up</button>
        </div>

      </form>
    </div>
  )
}
