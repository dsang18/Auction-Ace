// 'use client';

import { useState } from 'react';
import Logo from './Logo';
import { AiOutlineSearch } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import Link from 'next/link';
import Image from 'next/image';

// Kinde
import {
    getKindeServerSession,
    RegisterLink,
    LoginLink,
    LogoutLink,
} from '@kinde-oss/kinde-auth-nextjs/server';

export default async function Navbar() {
    const { getUser, isAuthenticated } = getKindeServerSession();
    const user = await getUser();

    // const [loggedIn, setloggedIn] = useState(true);
    // const [MenuOpen, setMenuOpen] = useState(false);

    const profileMenu = (
        <div
            className="absolute top-12 right-0 z-10 mt-2 w-80  rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
        >
            <Link
                href="/"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                id="user-menu-item-1"
            >
                Home
            </Link>
            <Link
                href="/dashboard"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                id="user-menu-item-1"
            >
                Dashboard
            </Link>
            <LogoutLink
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                id="user-menu-item-2"
            >
                Log out
            </LogoutLink>
        </div>
    );

    return (
        <div className="flex items-center justify-around flex-row bg-[#FFFDFB] absolute w-screen md:w-full z-10">
            <Logo />
            <form className="w-full flex items-center justify-around flex-row ">
                <div className="relative w-3/5 md:w-3/5 flex items-center justify-end">
                    <AiOutlineSearch className="absolute mr-2 text-2xl" />
                    <input
                        type="text"
                        placeholder="Search Auction Ace"
                        className="w-full px-2 py-1 text-md rounded-lg border-[1.5px] border-[#938f8f]"
                    ></input>
                </div>

                {(await isAuthenticated()) ? (
                    <div className="flex items-center justify-end  md:w-1/5">
                        {user?.picture ? (
                            <Image
                                className={'rounded-full'}
                                src={user?.picture}
                                width={40}
                                height={40}
                                alt="User Profile Avatar"
                            />
                        ) : (
                            <CgProfile
                                className="text-4xl cursor-pointer"
                                onClick={() => {
                                    // setMenuOpen(!MenuOpen);
                                }}
                            />
                        )}

                        {/* {MenuOpen ? profileMenu : <div></div>} */}
                    </div>
                ) : (
                    <div className="flex items-center justify-around flex-row w-3/5 md:w-1/5">
                        <LoginLink
                            className="sm:text-sm md:text-md text-slate-50 bg-[#E3AF46]  px-3 lg:px-6 py-2 rounded-lg "
                        >
                            Login
                        </LoginLink>
                        <RegisterLink
                            className="sm:text-sm md:text-md text-slate-50 bg-[#E3AF46] px-3 py-2 lg:px-6 rounded-lg "
                        >
                            Sign Up
                        </RegisterLink>
                    </div>
                )}
            </form>
        </div>
    );
}
