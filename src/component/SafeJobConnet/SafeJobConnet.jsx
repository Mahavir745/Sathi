import React from 'react'
import JobPortal from './JobPortal'
import { FaArrowRightLong } from "react-icons/fa6";
import Jobs from './Jobs';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import Footer from '../Footer/Footer';

const SafeJobConnet = () => {
  return (
    <div className=' mt-30'>
      <div className='flex m-15 justify-between gap-10'>
        <div className='flex flex-col gap-10 mt-20 w-[700px] '>
          <div>
            <h1 className='flex gap-2 text-6xl font-bold'><span>Safe Job</span><span className='text-blue-500'>Connect</span></h1>
            <p className='text-2xl'>Explore various jobs at our platform</p>
          </div>
          <div className='text-2xl w-[620px]'>
            Online Saathi's job matching services are dedicated to empowering informal workers by connecting them with employment opportunities that best fit their skills and preferences.
          </div>
        </div>
        <div className='h-[826px] border w-[1100px]'>
          <img src="" alt="" className='w-full h-full' />
        </div>
      </div>

      {/* section 2 */}
      <div className='mt-40 flex items-center flex-col'>
        <h1 className='text-6xl font-bold flex gap-2'>How our Job Portal <span className='text-blue-600'>works</span></h1>
        <div className='mt-10 flex gap-12 items-center'>
          <JobPortal />
          <FaArrowRightLong className='text-6xl' />
          <JobPortal />
          <FaArrowRightLong className='text-6xl' />
          <JobPortal />
        </div>
      </div>


      {/* section 3 */}

      <div className='mt-40 flex items-center flex-col'>
        <h1 className='text-6xl font-bold flex gap-2'>Featured<span className='text-blue-600'>Jobs</span></h1>
        <div className='mt-10 flex gap-12 items-center'>
          <Jobs />
          <Jobs />
          <Jobs />
        </div>
        <div className='mt-20'>
          <button className='text-white bg-blue-500 pt-4 pb-4 rounded-2xl p-10'>Explore More</button>
        </div>
      </div>


      {/* section 4 */}
      <WhyChooseUs/>
      <Footer/>

    </div>
  )
}

export default SafeJobConnet