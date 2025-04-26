import React from 'react'
import aboutus from "../../../assets/aboutus.png"

const CentralSchemes = () => {
  return (
    <li className='w-[196px] h-[120px] shadow rounded-xl flex flex-col justify-center gap-2 items-center frequentlyQ'>
      <h3 className='font-medium line-clamp-2 w-[146px]'>Lorem ipsum dolor, sit amet consecteh shdfhdkhs</h3>
      <div className='flex justify-between w-[150px] items-center'>
        <p className='text-gray-500'>2 schemes</p>
        <img src={aboutus} alt="" className='w-[44px] h-[44px]' />
      </div>
    </li>
  )
}

export default CentralSchemes