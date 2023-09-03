import React from 'react';
import Logo from './Logo';
import {AiOutlineMail,AiOutlineLock} from 'react-icons/ai';


export default function SignIn() {
  return (
    <div>
      
    <Logo/>
    <div className='flex items-center justify-center w-screen/2 h-screen/2 '>
      <div className=' w-1/2 h-4/5 signUpBox flex items-center justify-start border-2 border-[#805D5D] bg-white rounded-lg flex-col p-4 position-relative'>
        {/* Sign in form heading */}
        <h3 className='text-md font-bold'>Login</h3>
        <h3 className='text-md font-bold'>New User? <a>Sign Up here</a></h3>

        {/* sign up form */}
        <form className='flex items-center justify-around flex-col w-full p-4 position-relative'>

          {/* inputs for email  */}
          
            <div className='flex items-start justify-start flex-col w-full px-4 py-2'>
              <label className="text-md">Email</label>
              <div className='relative flex items-center w-full'>
                <AiOutlineMail className="w-5 h-5 absolute ml-1 text-[#805D5D]" />
              <input type="email" className='pr-1 pl-7 py-1 text-md border-[1.5px] border-[#938f8f] rounded-md w-full' name="email" placeholder='Email'></input>
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


          <button className='text-lg text-slate-50 bg-[#E3AF46] px-7 py-2 rounded-lg'>Login</button>


        </form>
      </div>
      
    </div>
    </div>
  )
}
