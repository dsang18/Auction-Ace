"use client" 

import Collage from "./Collage";
import React from "react";

export default function Section(props) {
  return (
    <div>
      <div className="w-full h-1/3 md:h-2/5 lg:h-2/5 bg-[#805D5D] overflow-hidden flex items-center justify-between p-5">
            <div className="flex items-start justify-center flex-col p-4">
                <h3 className=" ps-5 text-lg sm:text-md lg:text-4xl text-slate-50 whitespace-nowrap">{props.section_name1}</h3>
                <h3 className=" ps-5 text-md lg:text-xl text-slate-50 whitespace-nowrap">Home / <span className="text-[#E3AF46] "><u>{props.section_name2}</u></span></h3>
            </div>

            <Collage/>
        </div>
    </div>
  )
}
