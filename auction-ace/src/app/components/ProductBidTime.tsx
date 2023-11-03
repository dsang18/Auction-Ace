'use client'

import {format, differenceInSeconds} from "date-fns";
import { useState } from "react";



export default function ProductBidTime(props:any) {

    const [bidTime, setBidTime] = useState("Loading...")

    const TimeLeft = ()=>{

        const currentDate = new Date();
         const time_difference = differenceInSeconds(props.endTime,currentDate);
        const hours = Math.floor(time_difference / 3600);
        const minutes = Math.floor((time_difference % 3600) / 60);
        const seconds = time_difference % 60;
        setBidTime(format(
            new Date(0,0,0,hours, minutes, seconds),
            "HH:mm:ss"
        ))
    }

    setInterval(TimeLeft,1000)

  return (
    <div>
      <h3 className="text-lg font-semibold text-start">
            {bidTime}
        </h3>
    </div>
  )
}
