'use client';

// Layout Components
// import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';

// Section Components
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import OrderBidding from './components/OrderBidding';
import AllPurchases from './components/AllPurchases';

import React, { useState } from 'react';

export default function page() {
    const [displayComponent, setDisplayComponent] = useState('Dashboard');

    const handleButtonClick = (display: string) => {
        setDisplayComponent(display);
    };

    return (
        <main>
            {/* <Navbar /> */}
            <Jumbotron
                section_name1={"Dashboard"}
                section_name2={"displayComponent"}
            />

            <div className="flex items-center justify-around w-full flex-wrap">
                <button
                    className={displayComponent === 'Dashboard' ? `bg-amber-400 text-white border-0 text-md px-2 py-1 text-center text-lg rounded-lg my-2 w-2/5 lg:m-2 lg:w-1/5` : `text-md bg-slate-50 border-[1.5px] border-gray-500 px-2 py-1 text-center text-lg rounded-lg my-2 w-2/5 lg:m-2 lg:w-1/5`}
                    onClick={() => handleButtonClick('Dashboard')}
                >
                    Dashboard
                </button>
                <button
                    className={displayComponent === 'Profile' ? `bg-amber-400 text-white border-0 text-md px-2 py-1 text-center text-lg rounded-lg my-2 w-2/5 lg:m-2 lg:w-1/5` : `text-md bg-slate-50 border-[1.5px] border-gray-500 px-2 py-1 text-center text-lg rounded-lg my-2 w-2/5 lg:m-2 lg:w-1/5`}
                    onClick={() => handleButtonClick('Profile')}
                >
                    My Profile
                </button>
                <button
                    className={displayComponent === 'Order Bidding' ? `bg-amber-400 text-white border-0 text-md px-2 py-1 text-center text-lg rounded-lg my-2 w-2/5 lg:m-2 lg:w-1/5` : `text-md bg-slate-50 border-[1.5px] border-gray-500 px-2 py-1 text-center text-lg rounded-lg my-2 w-2/5 lg:m-2 lg:w-1/5`}
                    onClick={() => handleButtonClick('Order Bidding')}
                >
                    Order Bidding
                </button>
                <button
                    className={displayComponent === 'Purchases' ? `bg-amber-400 text-white border-0 text-md px-2 py-1 text-center text-lg rounded-lg my-2 w-2/5 lg:m-2 lg:w-1/5` : `text-md bg-slate-50 border-[1.5px] border-gray-500 px-2 py-1 text-center text-lg rounded-lg my-2 w-2/5 lg:m-2 lg:w-1/5`}
                    onClick={() => handleButtonClick('Purchases')}
                >
                    Purchases
                </button>
            </div>
           
            {/* Conditionally Rendering Components */}
            {displayComponent === 'Dashboard' && <Dashboard />}
            {displayComponent === 'Profile' && <Profile />}
            {displayComponent === 'Order Bidding' && <OrderBidding />}
            {displayComponent === 'Purchases' && <AllPurchases />} 
        </main>
    );
}
