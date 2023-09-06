import React from 'react';
import Logo from '../components/Logo';
import {BsPerson} from 'react-icons/bs';
import {BiPhone} from 'react-icons/bi';
import {AiOutlineMail,AiOutlineLock} from 'react-icons/ai';


export default function SignUp() {
  return (
    <div>
    <div className='flex items-center justify-center p-4 w-screen h-screen md:w-screen/2 md:h-screen/2 py-3'>
      <div className=' w-full h-4/5 md:w-3/4 md:h-2/3 lg:w-1/2 lg:h-3/4 signUpBox flex items-center justify-start border-2 border-[#805D5D] bg-white rounded-lg flex-col'>

        {/* Sign up form heading */}
        <h3 className='text-3xl'>Sign Up</h3>
        <h3 className='text-md'>Already Registered? <a>Login here</a></h3>

        {/* sign up form */}
        <form className='flex items-center justify-around flex-col w-full p-4'>

          {/* inputs for first name and last name */}
          <div className='flex items-center justify-around flex-row w-full h-full flex-wrap'>


            <div className='flex items-start justify-start flex-col w-full md:w-1/2 md:px-2'>
              <label className="text-md w-full">First Name</label>
              <div className='relative flex items-center w-full'>
                <BsPerson className="w-5 h-5 absolute ml-1 text-[#805D5D]" />
                <input type="text" className='w-full pr-1 pl-7 py-1 text-md border-[1.5px] border-[#938f8f] rounded-md' placeholder="First Name"></input>
              </div>
            </div>


            <div className='flex items-start justify-start flex-col w-full md:w-1/2 md:px-2'>
              <label className="text-md">Last Name</label>
              <div className='relative flex items-center w-full'>
                <BsPerson className="w-5 h-5 absolute ml-1 text-[#805D5D]" />
              <input type="text" className=' pr-1 pl-7 py-1 text-md border-[1.5px] border-[#938f8f] rounded-md w-full' placeholder="Last Name"></input>
              </div>
            </div>
          </div>

          {/* inputs for email and phone */}
          <div className='flex items-center justify-around flex-row w-full flex-wrap'>
            <div className='flex items-start justify-start flex-col w-full md:w-1/2 md:px-2'>
              <label className="text-md">Phone</label>
              <div className='relative flex items-center w-full'>
                <BiPhone className="w-5 h-5 absolute ml-1 text-[#805D5D]" />
              <input type="tel" className='pr-1 pl-7 py-1 text-md border-[1.5px] border-[#938f8f] rounded-md w-full' name="phone" placeholder="Phone"></input>
              </div>
            </div>
            <div className='flex items-start justify-start flex-col w-full md:w-1/2 md:px-2'>
              <label className="text-md">Email</label>
              <div className='relative flex items-center w-full'>
                <AiOutlineMail className="w-5 h-5 absolute ml-1 text-[#805D5D]" />
              <input type="email" className='pr-1 pl-7 py-1 text-md border-[1.5px] border-[#938f8f] rounded-md w-full' name="email" placeholder='Email'></input>
              </div>
            </div>
          </div>

          {/* input for password */}
          <div className='flex items-start justify-start flex-col w-full md:px-2'>
              <label className="text-md">Password</label>
              <div className='relative flex items-center w-full'>
                <AiOutlineLock className="w-5 h-5 absolute ml-1 text-[#805D5D]" />
              <input type="password" className='pr-1 pl-7 py-1 text-md border-[1.5px] border-[#938f8f] rounded-md w-full' name="password" placeholder='Password'></input>
              </div>
            </div>

          {/* input for confirm password */}
          <div className='flex items-start justify-start flex-col w-full md:px-2 '>
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
