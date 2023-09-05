import React from 'react';
import Logo from '../components/Logo';
import {AiOutlineMail,AiOutlineLock} from 'react-icons/ai';


export default function SignIn() {
  return (
    <div>
    <div className='flex items-center justify-center p-4 w-screen h-screen md:w-screen/2 md:h-screen/2 absolute'>
      <div className=' w-full h-1/2 md:w-2/3 md:h-1/2 lg:w-1/3 lg:h-2/3 signUpBox flex items-center justify-start border-2 border-[#805D5D] bg-white rounded-lg flex-col p-4 position-relative'>
        {/* Sign in form heading */}
        <h3 className='text-md font-bold'>Login</h3>
        <h3 className='text-md font-bold text-center'>New User? <a>Sign Up here</a></h3>

        {/* sign up form */}
        <form className='flex items-center justify-around flex-col w-full p-4 position-relative'>

          {/* inputs for email  */}
          
            <div className='flex items-start justify-start flex-col w-full px-2 py-2'>
              <label className="text-md">Email</label>
              <div className='relative flex items-center w-full'>
                <AiOutlineMail className="w-5 h-5 absolute ml-1 text-[#805D5D]" />
              <input type="email" className='pr-1 pl-7 py-1 text-md border-[1.5px] border-[#938f8f] rounded-md w-full' name="email" placeholder='Email'></input>
              </div>
            </div>

          {/* input for password */}
          <div className='flex items-start justify-start flex-col w-full px-2 py-2'>
              <label className="text-md">Password</label>
              <div className='relative flex items-center w-full'>
                <AiOutlineLock className="w-5 h-5 absolute ml-1 text-[#805D5D]" />
              <input type="password" className='pr-1 pl-7 py-1 text-md border-[1.5px] border-[#938f8f] rounded-md w-full' name="password" placeholder='Password'></input>
              </div>
            </div>


          <button className='text-lg text-slate-50 bg-[#E3AF46] px-7 py-2 rounded-lg mt-5'>Login</button>


        </form>
      </div>
      
    </div>
    </div>
  )
}
