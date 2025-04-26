import React from 'react'
import aboutus from "../../../assets/aboutus.png"

const States = () => {
  return (
    <li className='w-[253px] h-[104px] flex gap-4 shadow rounded-2xl items-center justify-center frequentlyQ'>
      <img src={aboutus} alt="" className='w-[49px] h-[40px]' />
      <div className='flex flex-col gap-2'>
        <p className='font-medium text-[16px]'>Jharkhand</p>
        <p className='text-gray-600 text-[12px] flex gap-4 font-medium'><span className='text-green-800'>35 <span className='text-gray-600'>State</span></span> <span className='text-green-800'>518 <span className='text-gray-600'>Central</span></span></p>
      </div>
    </li>
  )
}

export default States