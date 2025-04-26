import React from 'react'
import ProcessAtm from './ProcessAtm'
import FAQ from './FAQ'
import aboutus from "../../../assets/aboutus.png"
import { FaArrowRightLong } from 'react-icons/fa6'
import Footer from '../../Footer/Footer'

const PanCard = () => {

  let flexible = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <>
      <div className=' mt-30 m-20'>
        <div className='flex m-15 justify-between gap-10 h-auto mt-20 p-4'>
          <div className='flex flex-col gap-30 mt-40 w-[700px]'>
            <div>
              <h1 className='flex gap-2 text-6xl font-bold'><span>Pan Card</span><span className='text-blue-500'>Center</span></h1>
            </div>
            <div className='text-2xl w-[620px]'>
              Online Saathi's job matching services are dedicated to empowering informal workers by connecting them with employment opportunities that best fit their skills and preferences.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus laborum iure doloribus cumque aliquid aperiam dignissimos vel a officiis reiciendis!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, necessitatibus!
            </div>
          </div>
          <div className='h-[826px] border w-[900px] flex justify-center items-center'>
            <img src="" alt="" className='w-[600px] h-[600px]' />
          </div>
        </div>

        {/* section 2 */}
        <ProcessAtm />

        {/* section 3 */}

        <div className='flex overflow-y-scroll slide gap-10 mt-30 h-[400px] items-center'>
          {flexible.map(item => (
            <div className='w-[200px]  h-[200px] shadow-md rounded-2xl shadow-blue-400 flex items-center flex-shrink-0 gap-2 p-2 flex-col justify-center hover:scale-95 tranSmooth'>
              <img src="" alt="" className='w-[120px] h-[120px] shadow' />
              <p className='text-xl font-medium text-center text-gray-600'>Authorized PAN Card Center</p>
            </div>
          ))}
        </div>

        {/* section 4 */}

        <div className='flex text-6xl font-medium mt-30'><span>FAQ</span><span className='text-blue-600'>'S</span></div>
        <div className=' min-w-[1140px] mb-[80px] mt-20 m-auto '>
          <div className='flex justify-around  items-center gap-10  p-4'>
            <div className='w-[758px] h-[548px] shadow-xl rounded-xl sticky'>
              <img src={aboutus} alt="img" className='w-full h-full' />
            </div>
            <div className='w-[558px] min-h-[394px] flex flex-col'>
              <div className=' p-2'>
                <h1 className='text-3xl font-medium mb-[40px]'>Frequently Asked Questions</h1>
                <div className=' min-h-[64px] flex flex-col justify-center'>
                  <FAQ />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PanCard