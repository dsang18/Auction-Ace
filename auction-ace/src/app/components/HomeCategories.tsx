import React from 'react';
import { AiOutlineMobile } from 'react-icons/ai';
export default function HomeCategories() {
    return (
        <div className=" p-4 my-4" id="HomeCategories">
            <div className=" w-full flex items-center justify-center">
                <h3 className="text-3xl text-center w-100 ">
                    Explore by Categories
                </h3>
            </div>
            <div className="flex items-center justify-around p-4 flex-row flex-wrap">
                <div className="border shadow-xl border-gray-300 p-4 rounded-md flex items-center flex-col justify-between m-2">
                    <AiOutlineMobile className="text-4xl md:text-7xl mb-3" />
                    <h3 className="text-md md:text-xl">Mobile Phones</h3>
                </div>

                <div className="border shadow-xl border-gray-300 p-4 rounded-md flex items-center flex-col justify-between m-2">
                    <AiOutlineMobile className="text-4xl md:text-7xl mb-3" />
                    <h3 className="md:text-xl">Mobile Phones</h3>
                </div>

                <div className="border shadow-xl border-gray-300 p-4 rounded-md flex items-center flex-col justify-between m-2">
                    <AiOutlineMobile className="text-4xl md:text-7xl mb-3" />
                    <h3 className="md:text-xl">Mobile Phones</h3>
                </div>

                <div className="border shadow-xl border-gray-300 p-4 rounded-md flex items-center flex-col justify-between m-2">
                    <AiOutlineMobile className="text-4xl md:text-7xl mb-3" />
                    <h3 className="md:text-xl">Mobile Phones</h3>
                </div>
            </div>
        </div>
    );
}
