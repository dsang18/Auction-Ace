'use client';

import React, { useState } from 'react';

// Section Components
import Dashboard from './Dashboard';
import AddProduct from './AddProduct';
import Jumbotron from '@/app/components/Jumbotron';


type Props = {
    userId:string;
    userName:string;
    children: React.ReactNode
}

export default function ComponentTree(props: Props) {
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
                        displayComponent === 'Your Products'
                            ? `bg-amber-400 text-white border-0 text-md px-2 py-1 text-center text-lg rounded-lg my-2 w-2/5 lg:m-2 lg:w-1/5`
                            : `text-md bg-slate-50 border-[1.5px] border-gray-500 px-2 py-1 text-center text-lg rounded-lg my-2 w-2/5 lg:m-2 lg:w-1/5`
                    }
                    onClick={() => handleButtonClick('Your Products')}
                >
                    My Products
                </button>
            </div>

            {/* Conditionally Rendering Components */}
            {displayComponent === 'Dashboard' && <Dashboard userId={props.userId} />}
            {displayComponent === 'Sell Product' && <AddProduct userId={props.userId} userName={props.userName} />}
            {/* {displayComponent === 'Order Bidding' && <YourProducts userId={props.userId}><YourProductChild userId={props.userId} /></YourProducts>} */}
            {/* {displayComponent === 'Order Bidding' && {props.children}} */}
            {displayComponent === 'Your Products' ? props.children : null}
            {/* <div className='hidden'>
                {props.children}
            </div> */}
        </section>
    );
}
