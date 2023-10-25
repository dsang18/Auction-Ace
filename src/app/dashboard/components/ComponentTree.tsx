'use client';

import React, { useState } from 'react';

// Section Components
import Dashboard from './Dashboard';
import AddProduct from './AddProduct';
import OrderBidding from './OrderBidding';
import AllPurchases from './AllPurchases';
import Jumbotron from '@/app/components/Jumbotron';

export default function ComponentTree() {
    const [displayComponent, setDisplayComponent] = useState('Dashboard');

    const handleButtonClick = (display: string) => {
        setDisplayComponent(display);
    };

    return (
        <section>
            <Jumbotron
                section_name1={'Dashboard'}
                section_name2={displayComponent}
            />
            <div className="flex items-center justify-around w-full flex-wrap">
                <button
                    className={
                        displayComponent === 'Dashboard'
                            ? `bg-amber-400 text-white border-0 text-md px-2 py-1 text-center text-lg rounded-lg my-2 w-2/5 lg:m-2 lg:w-1/5`
                            : `text-md bg-slate-50 border-[1.5px] border-gray-500 px-2 py-1 text-center text-lg rounded-lg my-2 w-2/5 lg:m-2 lg:w-1/5`
                    }
                    onClick={() => handleButtonClick('Dashboard')}
                >
                    Dashboard
                </button>
                <button
                    className={
                        displayComponent === 'Sell Product'
                            ? `bg-amber-400 text-white border-0 text-md px-2 py-1 text-center text-lg rounded-lg my-2 w-2/5 lg:m-2 lg:w-1/5`
                            : `text-md bg-slate-50 border-[1.5px] border-gray-500 px-2 py-1 text-center text-lg rounded-lg my-2 w-2/5 lg:m-2 lg:w-1/5`
                    }
                    onClick={() => handleButtonClick('Sell Product')}
                >
                    Sell Product
                </button>
                <button
                    className={
                        displayComponent === 'Order Bidding'
                            ? `bg-amber-400 text-white border-0 text-md px-2 py-1 text-center text-lg rounded-lg my-2 w-2/5 lg:m-2 lg:w-1/5`
                            : `text-md bg-slate-50 border-[1.5px] border-gray-500 px-2 py-1 text-center text-lg rounded-lg my-2 w-2/5 lg:m-2 lg:w-1/5`
                    }
                    onClick={() => handleButtonClick('Order Bidding')}
                >
                    Order Bidding
                </button>
                <button
                    className={
                        displayComponent === 'Purchases'
                            ? `bg-amber-400 text-white border-0 text-md px-2 py-1 text-center text-lg rounded-lg my-2 w-2/5 lg:m-2 lg:w-1/5`
                            : `text-md bg-slate-50 border-[1.5px] border-gray-500 px-2 py-1 text-center text-lg rounded-lg my-2 w-2/5 lg:m-2 lg:w-1/5`
                    }
                    onClick={() => handleButtonClick('Purchases')}
                >
                    Purchases
                </button>
            </div>

            {/* Conditionally Rendering Components */}
            {displayComponent === 'Dashboard' && <Dashboard />}
            {displayComponent === 'Sell Product' && <AddProduct />}
            {displayComponent === 'Order Bidding' && <OrderBidding />}
            {displayComponent === 'Purchases' && <AllPurchases />}
        </section>
    );
}
