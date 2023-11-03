'use client';

import Link from 'next/link';

type Props = {
    section_name1: string;
    section_name2: string | undefined;
};

import React from 'react';
import Image from 'next/image';
import collage from 'public/collage.png';

export default function Jumbotron(props: Props) {
    return (

            <div className="w-full h-1/5 lg:h-1/2 bg-[#805D5D] overflow-hidden flex items-center justify-between p-5">
                <div className="flex items-start justify-center flex-col p-4">
                    <div className=" ps-5 text-lg sm:text-md lg:text-4xl text-slate-50 whitespace-nowrap">
                        {props.section_name1}
                    </div>
                    <div className="flex gap-2 ps-5 text-md lg:text-xl text-slate-50 whitespace-nowrap">
                        <Link href="/landingPage">Home</Link>
                        <p>/</p>
                        <p className="text-[#E3AF46]">
                            <u>{props.section_name2}</u>
                        </p>
                    </div>
                </div>

                <div className="rotate-[25deg] mt-10">
                    <Image
                        src={collage}
                        className="w-48 sm:w-60 md:w-52 lg:w-full p-0 ml-10"
                        alt="collage_1"
                    ></Image>
                </div>
            </div>
        
    );
}
