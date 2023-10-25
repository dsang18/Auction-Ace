import {MdPeopleOutline} from 'react-icons/md';
import {LiaCommentSolid} from 'react-icons/lia';


export default function Reviews() {
  return (
    <div className="flex items-center justify-around p-4 flex-col md:flex-row sm:w-full">

      <div className="flex items-center justify-around flex-row border border-gray-300 p-4 shadow-md w-full sm:w-3/4 md:w-1/4 my-4 rounded-md">
            <MdPeopleOutline className="text-6xl text-[#E3AF46]"/>
        <div className='flex items-start justify-start flex-col p-2'>
            <h3 className='text-xl font-semibold'>100+</h3>
            <h3 className='text-xl'>Happy Customers</h3>
        </div>
      </div>

      <div className="flex items-center justify-around flex-row border border-gray-300 p-4 shadow-md w-full sm:w-3/4 md:w-1/4 my-4 rounded-md">
            <LiaCommentSolid className="text-6xl text-[#E3AF46]"/>
        <div className='flex items-start justify-start flex-col p-2'>
            <h3 className='text-xl font-semibold'>100+</h3>
            <h3 className='text-xl'>Good Reviews</h3>
        </div>
      </div>

      <div className="flex items-center justify-around flex-row border border-gray-300 p-4 shadow-md w-full sm:w-3/4 md:w-1/4 my-4 rounded-md">
            <MdPeopleOutline className="text-6xl text-[#E3AF46]"/>
        <div className='flex items-start justify-start flex-col p-2'>
            <h3 className='text-xl font-semibold'>100+</h3>
            <h3 className='text-xl'>Happy Customers</h3>
        </div>
      </div>

    </div>
  )
}
