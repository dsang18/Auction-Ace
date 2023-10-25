'use client';

import { useState } from 'react';
// import Logo from './Logo';
// import { AiOutlineSearch } from 'react-icons/ai';
// import { CgProfile } from 'react-icons/cg';
import Link from 'next/link';
// import Image from 'next/image';
import {RxHamburgerMenu} from 'react-icons/rx';


// Kinde
// import {
//     getKindeServerSession,
//     RegisterLink,
//     LoginLink,
//     LogoutLink,
// } from '@kinde-oss/kinde-auth-nextjs/server';

export default function Navbar() {
    // const { getUser, isAuthenticated } = getKindeServerSession();
    // const user = await getUser();

    // const [loggedIn, setloggedIn] = useState(true);
    const [MenuOpen, setMenuOpen] = useState(false);

    const profileMenu = (
        <div
            className="absolute top-12 right-0 z-10 mt-7 w-80  rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
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

            
            
        </div>
    );

    return (
        <div className="">
            <RxHamburgerMenu
            onClick={()=>{
                setMenuOpen(!MenuOpen);
            }}
            className='text-display-3 cursor-pointer'
            />
            {MenuOpen?profileMenu:<div></div>}
        </div>
    );
}
