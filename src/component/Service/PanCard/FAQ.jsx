import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa6'

const FAQ = () => {

  const [rotate,setRotate] = useState(false);

  const HandleRotate = ()=>{
    setRotate(state => !state);
  }

  return (
    <div className=' mb-[20px]'>
      <div className='flex items-center justify-between w-full pr-1 '>
        <p className='font-medium '>How can I check my PAN card status?</p>
        <FaAngleDown onClick={HandleRotate} style={{
          rotate:`${!rotate ? "0deg":"180deg"}`
        }}/>
      </div>
      {rotate && <div className=' pt-[30px] frequentlyQ'>hidden text here lorem10</div>}
    </div>
  )
}

export default FAQ