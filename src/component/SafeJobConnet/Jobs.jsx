import React from 'react'
import { FaClock ,FaLocationDot} from "react-icons/fa6";
import { MdCurrencyRupee } from "react-icons/md";

const Jobs = () => {
  return (
    <div className=' p-4 shadow-gray-600 shadow rounded-md w-[380px] flex flex-col gap-8'>
      <div className='flex flex-col gap-4'>
        <button className='border-2 border-blue-500 rounded-4xl text-[14px] font-medium p-2 w-[120px]'>20 May, 2024</button>
        <div>
          <h1 className='font-bold text-2xl'>ABC Constructions</h1>
          <p className='flex items-center gap-1'><FaLocationDot/><span>Gujarat</span></p>
          <p className='flex items-center gap-1'><FaClock/><span>4 Years</span></p>
        </div>
        <div>
          <h2 className='font-bold text-xl'>Details</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, expedita.</p>
          <ul className='flex gap-2 mt-4'>
            <li className='border border-blue-500 rounded-4xl text-[12px] p-2'>Free Food</li>
            <li className='border border-blue-500 rounded-4xl text-[12px] p-2'>Accomodation</li>
          </ul>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <div>
        <h1 className='font-medium'>Wages:</h1>
        <p className='text-blue-500 flex items-center gap-1 text-[14px]'>
        <MdCurrencyRupee/> 500 - 700 Per Day
        </p>
        </div>
        <div>
          <button className='text-white font-medium bg-green-700 pt-2 pb-2 rounded-2xl p-10'>Apply</button>
        </div>
      </div>
    </div>
  )
}

export default Jobs