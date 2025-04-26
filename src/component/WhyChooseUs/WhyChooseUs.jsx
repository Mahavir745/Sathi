import React, { useEffect, useState } from 'react'
import TestCard from './TestCard'
const WhyChooseUs = () => {


  return (
    <div>
      <div className='pt-20 p-40'>
        {/* section 1 */}
        <div>
          <h1 className='text-5xl font-medium flex gap-3 justify-center mb-10'><span>Why Choose</span><span className='text-blue-600'>Us</span></h1>
          <p className='text-gray-600 text-[20px] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iure aspernatur, rem doloribus cum eius laudantium consequatur asperiores voluptatum nemo, eos, quod expedita aut mollitia a veniam nisi. Suscipit a nisi harum dolorem nobis ipsam reprehenderit ipsum vitae ratione culpa eius voluptas ex voluptatibus saepe perspiciatis deleniti, veritatis nostrum nesciunt.</p>
        </div>

        {/* section 2 */}
        <div className='mt-20'>
          <u className='flex gap-8 justify-center items-center' l>
            <li className='shadow-md shadow-gray-400 rounded flex justify-center flex-col items-center gap-2 w-[180px] h-[180px]'>
              <img src="" alt="" className='w-[120px] h-[120px] flex-shrink-0' />
              <p>Verified</p>
            </li>
            <li className='shadow-md shadow-gray-400 rounded-xl flex justify-center flex-col items-center gap-2 w-[180px] h-[180px]'>
              <img src="" alt="" className='w-[120px] h-[120px] flex-shrink-0' />
              <p>Verified</p>
            </li>
            <li className='shadow-md shadow-gray-400 rounded-xl flex justify-center flex-col items-center gap-2 w-[180px] h-[180px]'>
              <img src="" alt="" className='w-[120px] h-[120px] flex-shrink-0' />
              <p>Verified</p>
            </li>
          </u>
        </div>

        {/* section 3 */}
        <div className='flex flex-col items-center mt-30'>
          <h1 className='text-5xl font-medium mb-10'>Testimonials</h1>
          <TestCard/>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
