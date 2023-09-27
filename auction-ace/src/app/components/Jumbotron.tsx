'use client';

type Props = {
    section_name1: string;
    section_name2: string;
};

import React from 'react';
import Image from 'next/image';
import collage from 'public/collage.png';

export default function Jumbotron(props: Props) {
    return (
        <div>
            <div className="w-full h-52 md:h-60 lg:h-1/6 bg-[#805D5D] overflow-hidden flex items-center justify-between p-5">
                <div className="flex items-start justify-center flex-col p-4">
                    <h3 className=" ps-5 text-lg sm:text-md lg:text-4xl text-slate-50 whitespace-nowrap">
                        {props.section_name1}
                    </h3>
                    <h3 className=" ps-5 text-md lg:text-xl text-slate-50 whitespace-nowrap">
                        Home /{' '}
                        <span className="text-[#E3AF46] ">
                            <u>{props.section_name2}</u>
                        </span>
                    </h3>
                </div>

                <div className="rotate-[25deg] mt-10">
                    <Image
                        src={collage}
                        className="w-48 sm:w-60 md:w-52 lg:w-full p-0 ml-10"
                        alt="collage_1"
                    ></Image>
                </div>
            </div>
        </div>
    );
}
