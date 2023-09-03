import React from 'react';
import Logo from './Logo';
import {BsPerson} from 'react-icons/bs';
import {BiPhone} from 'react-icons/bi';
import {AiOutlineMail,AiOutlineLock} from 'react-icons/ai';


export default function SignUp() {
  return (
    <div>
      
    <Logo/>
    <div className='flex items-center justify-center w-screen/2 h-screen/2 '>
      <div className=' w-1/2 h-4/5 signUpBox flex items-center justify-start border-2 border-[#805D5D] bg-white rounded-lg flex-col p-4 position-relative'>
        {/* Sign up form heading */}
        <h3 className='text-md font-bold'>Sign Up</h3>
        <h3 className='text-md font-bold'>Already Registered? <a>Login here</a></h3>

        {/* sign up form */}
        <form className='flex items-center justify-around flex-col w-full p-4 position-relative'>

          {/* inputs for first name and last name */}
          <div className='flex items-center justify-around flex-row w-full mb-3'>
            <div className='flex items-start justify-start flex-col'>
              <label className="text-md">First Name</label>
              <div className='relative flex items-center'>
                <BsPerson className="w-5 h-5 absolute ml-1 text-[#805D5D]" />
                <input type="text" className=' pr-1 pl-7 py-1 text-md border-[1.5px] border-[#938f8f] rounded-md' placeholder="First Name"></input>
              </div>
            </div>
            <div className='flex items-start justify-start flex-col'>
              <label className="text-md">Last Name</label>
              <div className='relative flex items-center'>
                <BsPerson className="w-5 h-5 absolute ml-1 text-[#805D5D]" />
              <input type="text" className=' pr-1 pl-7 py-1 text-md border-[1.5px] border-[#938f8f] rounded-md' placeholder="Last Name"></input>
              </div>
            </div>
          </div>

          {/* inputs for email and phone */}
          <div className='flex items-center justify-around flex-row w-full'>
            <div className='flex items-start justify-start flex-col'>
              <label className="text-md">Phone</label>
              <div className='relative flex items-center'>
                <BiPhone className="w-5 h-5 absolute ml-1 text-[#805D5D]" />
              <input type="tel" className='pr-1 pl-7 py-1 text-md border-[1.5px] border-[#938f8f] rounded-md' name="phone" placeholder="Phone"></input>
              </div>
            </div>
            <div className='flex items-start justify-start flex-col'>
              <label className="text-md">Email</label>
              <div className='relative flex items-center'>
                <AiOutlineMail className="w-5 h-5 absolute ml-1 text-[#805D5D]" />
              <input type="email" className='pr-1 pl-7 py-1 text-md border-[1.5px] border-[#938f8f] rounded-md' name="email" placeholder='Email'></input>
              </div>
            </div>
          </div>

          {/* input for password */}
          <div className='flex items-start justify-start flex-col w-full px-4 py-2'>
              <label className="text-md">Password</label>
              <div className='relative flex items-center w-full'>
                <AiOutlineLock className="w-5 h-5 absolute ml-1 text-[#805D5D]" />
              <input type="password" className='pr-1 pl-7 py-1 text-md border-[1.5px] border-[#938f8f] rounded-md w-full' name="password" placeholder='Password'></input>
              </div>
            </div>

          {/* input for confirm password */}
          <div className='flex items-start justify-start flex-col w-full px-4 py-2'>
            <label className="text-md">Confirm Password</label>
            <div className='relative flex items-center w-full'>
                <AiOutlineLock className="w-5 h-5 absolute ml-1 text-[#805D5D]" />
            <input type="password" className='pr-1 pl-7 py-1 text-md border-[1.5px] border-[#938f8f] rounded-md w-full' name="confirm_password" placeholder='Confirm Password'></input>
            </div>
          </div>

          {/* Checkbox for T&C */}
          <div className='flex items-start justify-start flex-row px-4 py-2 w-full'>
            <input type="checkbox" className='rounded-md mx-1 mt-1 py-1' name="confirm_password"></input>
            <h3 className='text-md font-bold'> I agree to the Terms & Policy</h3>
          </div>


          {/* Submit button */}
          <button className='text-lg text-slate-50 bg-[#E3AF46] px-7 py-2 rounded-lg'>Sign Up</button>


        </form>
      </div>
      
    </div>
    </div>
  )
}
