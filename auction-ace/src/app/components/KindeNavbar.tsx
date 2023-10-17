import React from 'react';
import Link from 'next/link';

// Importing Kinde Components
import {
    getKindeServerSession,
    RegisterLink,
    LoginLink,
    LogoutLink,
} from '@kinde-oss/kinde-auth-nextjs/server';

export default function KindeNavbar() {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const user = getUser();
    return (
        <header>
            <nav className="">
                <Link href={'/'} className="">
                    AuctionAce
                </Link>
                <div>
                    {!isAuthenticated() ? (
                        <>
                            <LoginLink className="">
                                Sign in
                            </LoginLink>
                            <RegisterLink className="">
                                Sign up
                            </RegisterLink>
                        </>
                    ) : (
                        <div className="">
                            {user?.picture ? (
                                <img
                                    className=""
                                    src={user?.picture}
                                    alt="user profile avatar"
                                    referrerPolicy="no-referrer"
                                />
                            ) : (
                                <div className="">
                                    {user?.given_name?.[0]}
                                    {user?.family_name?.[0]}
                                </div>
                            )}
                            <div>
                                <p className="">
                                    {user?.given_name} {user?.family_name}
                                </p>

                                <LogoutLink className="">
                                    Log out
                                </LogoutLink>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}
