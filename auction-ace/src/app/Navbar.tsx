import React from 'react'
import Logo from './Logo'
import {AiOutlineSearch} from 'react-icons/ai';


export default function Navbar() {
  return (
    <div className='flex items-center justify-around flex-row bg-[#FFFDFB] absolute w-full z-10'>
      <Logo/> 
      <form className='w-full flex items-center justify-around flex-row '>
        <div className='relative w-3/5 flex items-center justify-end'>
            <AiOutlineSearch className='absolute mr-2 text-2xl' />
            <input type="text" placeholder='Search Auction Ace' className='w-full px-2 py-1 text-md rounded-lg border-[1.5px] border-[#938f8f]'></input>
        </div>

        <button className='text-md text-slate-50 bg-[#E3AF46] px-3 py-2 rounded-lg w-1/5'>Login/Sign Up</button>
      </form>
    </div>
  )
}
