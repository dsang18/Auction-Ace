'use client';
import React from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiPhone } from 'react-icons/bi';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';

export default function Profile() {
    const enable_inputs = () => {
        let elem = document.getElementsByTagName('fieldset');
        console.log(elem);
        elem[0].removeAttribute('disabled');
    };
    
    return (
        <section>
            <div className="flex items-center justify-center p-4  py-3">
                <div className="signUpBox w-full md:w-1/2 h-full flex items-center justify-start border-2 border-[#805D5D] bg-white rounded-lg flex-col">
                    {/* Sign up form heading */}
                    <h3 className="text-3xl">My Profile</h3>

                    {/* sign up form */}
                    <form>
                        <div className="flex items-center w-full justify-center">
                            <div
                                className="text-lg text-slate-50 bg-[#E3AF46] px-7 py-2 mt-4 rounded-lg w-50 text-center cursor-pointer"
                                onClick={enable_inputs}
                            >
                                Edit
                            </div>
                        </div>

                        <fieldset
                            id="form"
                            disabled
                            className="flex items-center justify-around flex-col w-full p-4 disabled:opacity-70"
                        >
                            {/* inputs for first name and last name */}
                            <div className="flex items-center justify-around flex-row w-full h-full flex-wrap">
                                <div className="flex items-start justify-start flex-col w-full md:w-1/2 md:px-2">
                                    <label className="text-md w-full">
                                        First Name
                                    </label>
                                    <div className="relative flex items-center w-full">
                                        <BsPerson className="w-5 h-5 absolute ml-1 text-[#805D5D]" />
                                        <input
                                            type="text"
                                            className="w-full pr-1 pl-7 py-1 text-md border-[1.5px] border-[#938f8f] rounded-md"
                                            placeholder="First Name"
                                        ></input>
                                    </div>
                                </div>

                                <div className="flex items-start justify-start flex-col w-full md:w-1/2 md:px-2">
                                    <label className="text-md">Last Name</label>
                                    <div className="relative flex items-center w-full">
                                        <BsPerson className="w-5 h-5 absolute ml-1 text-[#805D5D]" />
                                        <input
                                            type="text"
                                            className=" pr-1 pl-7 py-1 text-md border-[1.5px] border-[#938f8f] rounded-md w-full"
                                            placeholder="Last Name"
                                        ></input>
                                    </div>
                                </div>
                            </div>

                            {/* inputs for email and phone */}
                            <div className="flex items-center justify-around flex-row w-full flex-wrap">
                                <div className="flex items-start justify-start flex-col w-full md:w-1/2 md:px-2">
                                    <label className="text-md">Phone</label>
                                    <div className="relative flex items-center w-full">
                                        <BiPhone className="w-5 h-5 absolute ml-1 text-[#805D5D]" />
                                        <input
                                            type="tel"
                                            className="pr-1 pl-7 py-1 text-md border-[1.5px] border-[#938f8f] rounded-md w-full"
                                            name="phone"
                                            placeholder="Phone"
                                        ></input>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start flex-col w-full md:w-1/2 md:px-2">
                                    <label className="text-md">Email</label>
                                    <div className="relative flex items-center w-full">
                                        <AiOutlineMail className="w-5 h-5 absolute ml-1 text-[#805D5D]" />
                                        <input
                                            type="email"
                                            className="pr-1 pl-7 py-1 text-md border-[1.5px] border-[#938f8f] rounded-md w-full"
                                            name="email"
                                            placeholder="Email"
                                        ></input>
                                    </div>
                                </div>
                            </div>

                            {/* input for password */}
                            <div className="flex items-start justify-start flex-col w-full md:px-2">
                                <label className="text-md">Password</label>
                                <div className="relative flex items-center w-full">
                                    <AiOutlineLock className="w-5 h-5 absolute ml-1 text-[#805D5D]" />
                                    <input
                                        type="password"
                                        className="pr-1 pl-7 py-1 text-md border-[1.5px] border-[#938f8f] rounded-md w-full"
                                        name="password"
                                        placeholder="Password"
                                    ></input>
                                </div>
                            </div>

                            {/* input for confirm password */}
                            <div className="flex items-start justify-start flex-col w-full md:px-2 ">
                                <label className="text-md">
                                    Confirm Password
                                </label>
                                <div className="relative flex items-center w-full">
                                    <AiOutlineLock className="w-5 h-5 absolute ml-1 text-[#805D5D]" />
                                    <input
                                        type="password"
                                        className="pr-1 pl-7 py-1 text-md border-[1.5px] border-[#938f8f] rounded-md w-full"
                                        name="confirm_password"
                                        placeholder="Confirm Password"
                                    ></input>
                                </div>
                            </div>

                            {/* Submit button */}
                            <button className="text-lg text-slate-50 bg-[#E3AF46] px-7 py-2 mt-4 rounded-lg">
                                Save
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </section>
    );
}
