import React from 'react'
import {  BiHeart } from 'react-icons/bi'
import { FiMessageCircle } from "react-icons/fi";

import img from "../../../assets/aboutus.png"


const Digital = () => {
  return (
    <div className='w-[744px] h-[644px] shadow-md rounded-md mb-[30px] overflow-hidden'>
      <div className='h-[427px] relative'>
        <p title='digital' className='absolute top-[32px] left-[32px] text-[14px] text-white bg-slate-600 rounded-sm p-1 pl-2 pr-2 tracking-wider'>DIGITAL</p>
        <img src={img} alt="" className='w-full h-full '/>
      </div>
      <div className='h-[217px] p-4'>
        <div>
          <p className='text-[13px] text-gray-500 mb-2'>February 16, 2023</p>
          <h1 className='text-gray-800 text-3xl mb-2 font-medium'>You're Still Not Using Digital Tools?</h1>
          <p className='mb-7 line-clamp-1 w-[83%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit voluptatibus mollitia a eius quia porro laboriosam sunt dolore laudantium!</p>
        </div>
        <div className='flex justify-between items-center border-t-1 border-gray-400 pr-2 pt-4'>
          <div className='flex items-center gap-2'>
            <img src="" alt="" className='w-[32px] h-[32px] border rounded-full' />
            <p>Mahavir</p>
          </div>
          <div className='text-gray-400 flex items-center gap-4' >
            <p className='flex gap-2 text-[18px] items-center'><FiMessageCircle/><span>2</span></p>
            <p className='flex gap-2 text-[18px] items-center'><BiHeart/><span>69</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Digital