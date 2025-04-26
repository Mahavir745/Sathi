import React from 'react'
import aboutus from "../../../assets/aboutus.png"

const Schemes = () => {
  return (
    <li className='w-[190px] min-h-[180px] shadow p-2 flex flex-col justify-center frequentlyQ'>
      <img src={aboutus} alt="" className=' w-[65px] h-[65px]' />
      <p className=' h-[42px] text-green-500 flex items-center'>422 Schemes</p>
      <p className='text-[18px]'>Agriculture, Rural & Enviroment</p>
    </li>
  )
}

export default Schemes