import React from 'react'
import WhyChooseUs from '../../WhyChooseUs/WhyChooseUs'
import Footer from '../../Footer/Footer'
import { FaArrowRightLong } from 'react-icons/fa6'
import Features from './Features'
import ServicesOffer from './ServicesOffer'


const MicroAtm = () => {
  return (
    <div className=' mt-30'>
      <div className='flex m-15 justify-between gap-10 h-auto mt-20 p-4'>
        <div className='flex flex-col gap-30 mt-40 w-[700px] '>
          <div>
            <h1 className='flex gap-2 text-6xl font-bold'><span>Micro</span><span className='text-blue-500'>ATM</span></h1>
          </div>
          <div className='text-2xl w-[620px]'>
            Online Saathi's job matching services are dedicated to empowering informal workers by connecting them with employment opportunities that best fit their skills and preferences.
          </div>
        </div>
        <div className='h-[826px] border w-[900px]'>
          <img src="" alt="" className='w-full h-full' />
        </div>
      </div>

      {/* section 2 */}
      <div className='mt-40 flex items-center flex-col'>
        <h1 className='text-6xl font-bold flex gap-2'>Features of Online Saathi<span className='text-blue-600'>Mini ATM machine</span></h1>
        <div className='mt-10 flex gap-12 items-center'>
          <Features />
          <FaArrowRightLong className='text-6xl' />
          <Features />
          <FaArrowRightLong className='text-6xl' />
          <Features />
        </div>
      </div>


      {/* section 3 */}

      <div className='mt-40 flex items-center flex-col'>
        <h1 className='text-6xl font-bold flex gap-2'>Services Offered by<span className='text-blue-600'>Micro ATM</span></h1>
        <div className='mt-10 flex gap-12 items-center'>
          <ServicesOffer />
          <ServicesOffer />
          <ServicesOffer />
        </div>
        <div className='mt-20'>
          <button className='text-white bg-blue-500 pt-4 pb-4 rounded-2xl p-10'>Explore More</button>
        </div>
      </div>


      {/* section 4 */}
      <WhyChooseUs />
      <Footer />

    </div>
  )
}

export default MicroAtm