import './globals.css';
import type { Metadata } from 'next';
import { Maven_Pro } from 'next/font/google';
import Link from 'next/link';
// import KindeNavbar from './components/KindeNavbar';

// Importing Kinde Components
import {
    getKindeServerSession,
    RegisterLink,
    LoginLink,
    LogoutLink,
} from '@kinde-oss/kinde-auth-nextjs/server';

const maven_pro = Maven_Pro({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Auction Ace',
    description: 'Online auction system',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const user = getUser();
    return (
        <html lang="en">
            <body className={maven_pro.className}>
                <header>
                    <nav className="nav container">
                        <Link href={"/"} className="text-display-3">AuctionAce</Link>
                        <div>
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
                                <div className="profile-blob">
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
                            )}
                        </div>
                    </nav>
                </header>
                <main>
                    {/* <KindeNavbar /> */}
                    {children}
                </main>
            </body>
        </html>
    );
}
