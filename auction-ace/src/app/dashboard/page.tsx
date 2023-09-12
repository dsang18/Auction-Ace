import { PiPackageLight } from "react-icons/pi"
import { LuPackageCheck } from "react-icons/lu"
import { MdPendingActions } from "react-icons/md"
import { FiCheckCircle } from "react-icons/fi"

import Section from "../components/Section"
import DashboardSections from "../components/dashboard_sections"

export default function page() {
  return (
    <div>
      <Section section_name1={"Dashboard"} section_name2={"dashboard"}/>
      <div className=""></div>
        <DashboardSections section_active="dashboard" />
      <div className="flex items-center justify-around flex-wrap">


        <div className="w-1/3 bg-gray-200 m-3">
            <p className="text-xl w-full bg-[#805D5D] text-slate-50 px-2">Order Pending</p>
            <div className="w-full p-4 flex items-center justify-between">
              <p className="text-4xl font-medium text-[#805D5D]">00</p>
              <PiPackageLight className="text-[#805D5D] text-6xl" />
            </div>
        </div>

        <div className="w-1/3 bg-gray-200 m-3">
            <p className="text-xl w-full bg-[#805D5D] text-slate-50 px-2">Order Processing</p>
            <div className="w-full p-4 flex items-center justify-between">
              <p className="text-4xl font-medium text-[#805D5D]">00</p>
              <MdPendingActions className="text-[#805D5D] text-6xl" />
            </div>
        </div>


        <div className="w-1/3 bg-gray-200 m-3">
            <p className="text-xl w-full bg-[#805D5D] text-slate-50 px-2">Order Picked</p>
            <div className="w-full p-4 flex items-center justify-between">
              <p className="text-4xl font-medium text-[#805D5D]">00</p>
              <LuPackageCheck className="text-[#805D5D] text-6xl" />
            </div>
        </div>



        <div className="w-1/3 bg-gray-200 m-3">
            <p className="text-xl w-full bg-[#805D5D] text-slate-50 px-2">Order Completed</p>
            <div className="w-full p-4 flex items-center justify-between">
              <p className="text-4xl font-medium text-[#805D5D]">00</p>
              <FiCheckCircle className="text-[#805D5D] text-6xl" />
            </div>
        </div>

      </div>
    </div>
  )
}
