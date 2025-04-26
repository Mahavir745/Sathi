import React from 'react'
import { BiHeart, BiRightArrow } from 'react-icons/bi'
import { FiMessageCircle } from "react-icons/fi";
import { GoDotFill } from 'react-icons/go'
import { FaArrowRightLong } from "react-icons/fa6";

const Latest = () => {
  return (
    <div>
      <div className='w-[342px] min-h-[300px]  p-8 rounded-md shadow-md'>
        <p className='flex items-center font-medium gap-1 mb-[25px]'><span className='text-purple-500'><GoDotFill /></span><span className='text-xl'>Latest News</span></p>
        <div>
          <div className='h-[200px] w-[282px] relative border rounded-xl overflow-hidden'>
            <p title='digital' className='absolute top-[22px] left-[22px] text-[14px] text-white font-bold rounded-sm p-1 pl-2 pr-2 tracking-wider' style={{ background: "#181717d3" }}>TECHNOLOGY</p>
            <img src="" alt="" className='' />
          </div>
          <div className='h-[149px]'>
            <div className='mt-4'>
              <h1 className='text-gray-800 text-xl mb-2 font-medium leading-8.5'>You're Still Not Using Digital Tools?</h1>
            </div>
            <div className='flex justify-between items-center border-t-1 border-gray-400 pr-2 pt-4'>
              <div className='flex items-center gap-2'>
                <img src="" alt="" className='w-[32px] h-[32px] border rounded-full' />
                <p>Mahavir</p>
              </div>
              <div className='text-gray-400 flex items-center gap-4' >
                <p className='flex gap-2 text-[18px] items-center'><FiMessageCircle /><span>2</span></p>
                <p className='flex gap-2 text-[18px] items-center'><BiHeart /><span>69</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 2 */}

      <div className='w-[342px] min-h-[511px] shadow-xl p-8 rounded-md relative'>
        <div>
          <p className='flex items-center font-medium gap-1'><span className='text-purple-500'><GoDotFill /></span><span className='text-xl'>Featured News</span></p>
        </div>
        <div className='mt-[25px]'>
          <div className='flex gap-2 items-center'>
            <img src="" alt="" className='w-[64px] h-[64px] rounded-xl border flex-shrink-0' />
            <div className='flex flex-col gap-1'>
              <p className='text-[11px] text-gray-500'>February 28, 2023</p>
              <h1 className='font-medium'>Lorem, ipsum dolor sit amet consectetur.</h1>
            </div>
          </div>
        </div>
        <button className='flex items-center text-purple-600 gap-2 text-[14px] bottom-10 absolute'>VIEW ALL <FaArrowRightLong/></button>
      </div>
    </div>
  )
}

export default Latest