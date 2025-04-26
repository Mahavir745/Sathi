import React from 'react'
import { GoDotFill } from "react-icons/go";


const Members = () => {
  return (
    <div>
      <div className='w-[342px] h-[511px] shadow-xl p-8 rounded-md'>
        <div>
          <p className='flex items-center font-medium gap-1'><span className='text-purple-500'><GoDotFill/></span><span className='text-xl'>Memebers</span></p>
        </div>
        <div className='flex gap-4 mt-[24px]'>
          <div className='text-purple-900 p-2 pt-1 pb-1 text-[14px] rounded-md bg-purple-100 inline-block tracking-widest'>NEWEST</div>
        </div>
        <div className='mt-[25px]'>
          <div className='flex gap-2 items-center'>
            <img src="" alt="" className='w-[64px] h-[64px] rounded-full border' />
            <div className='flex flex-col gap-1'>
              <h1 className='font-medium'>Mahavir Kumar</h1>
              <p className='text-[11px] text-gray-500'>Active 20 minutes ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Members