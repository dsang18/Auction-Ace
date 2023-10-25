import Link from 'next/link';

// Importing Kinde Components
import {
    getKindeServerSession,
    RegisterLink,
    LoginLink,
    LogoutLink,
} from '@kinde-oss/kinde-auth-nextjs/server';
import Navbar from './Navbar';


export default function  KindeNavbar() {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const user = getUser();

    return (
        <header>
            <nav className="nav py-2 px-5">
                        <Link href={"/"} className="text-display-3">AuctionAce</Link>
                        <div className='w-1/2 sm:w-2/5 md:w-2/5 lg:w-1/4'>
                            {!isAuthenticated() ? (
                                <>
                                    <LoginLink className="btn btn-ghost sign-in-btn">
                                        Sign in
                                    </LoginLink>
                                    <RegisterLink className="btn btn-dark">
                                        Sign up
                                    </RegisterLink>
                                </>
                            ) : (
                                <div className='flex items-center flex-row justify-between w-full'>
                                    <div className="profile-blob"
                                    >
                                        {user?.picture ? (
                                            <img
                                                className="avatar"
                                                src={user?.picture}
                                                alt="user profile avatar"
                                                referrerPolicy="no-referrer"
                                            />
                                        ) : (
                                            <div className="avatar">
                                                {user?.given_name?.[0]}
                                                {user?.family_name?.[0]}
                                            </div>
                                        )}
                                        <div>
                                            <p className="text-heading-2">
                                                {user?.given_name}{' '}
                                                {user?.family_name}
                                            </p>
    
                                            <LogoutLink className="text-subtle">
                                                Log out
                                            </LogoutLink>
                                        </div>
                                    </div>
                                    <Navbar/>
                                </div>
                                
                            )}
                        </div>
                    </nav>
        </header>
    );
}
