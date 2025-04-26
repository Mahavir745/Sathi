import React from 'react'
import { BiCopyright } from 'react-icons/bi'

const Footer = () => {
  return (
    <div className=' h-[540px]'>
      {/* section 1 */}
      <div className=' h-[450px] flex flex-col  pl-20 pr-10 justify-center bg-gradient-to-r to-blue-500 from-gray-700 text-white gap-20'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-12'>
            <div>
              <h1 className='text-2xl font-medium text-white mb-6'>Download Application</h1>
              <ul className='text-[20px] flex flex-col gap-4'>
                <li className='w-[204px] h-[60px]  flex items-center justify-center gap-2 rounded-md bg-black'>
                  <img src="" alt="" className='w-[40px] h-[40px]' />
                  <div>
                    <p className='text-[12px]'>GET IT ON</p>
                    <p className='text-xl'>Google Play</p>
                  </div>
                </li>
                <li className='w-[204px] h-[60px]  flex items-center justify-center gap-2 rounded-md bg-black'>
                  <img src="" alt="" className='w-[40px] h-[40px]' />
                  <div>
                    <p className='text-[12px]'>GET IT ON</p>
                    <p className='text-xl'>Google Play</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h1 className='text-2xl font-medium text-white mb-6'>Important Links</h1>
              <ul className='list-disc text-[20px] list-inside'>
                <li>Home</li>
                <li>About Us</li>
                <li>Partner</li>
                <li>Network</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h1 className='text-2xl font-medium text-white mb-6'>Our Services</h1>
              <ul className='list-disc text-[20px] list-inside'>
                <li>Safe Job Connect</li>
                <li>Social Welfare Schemes</li>
                <li>On Demand Services</li>
                <li>PAN Card Center</li>
                <li>Insurance</li>
              </ul>
            </div>
          </div>
          <div className=' w-[360px] p-4'>
            <h1 className='text-2xl font-medium text-white mb-6'>Get In Touch</h1>
            <ul className='text-[20px] flex flex-col gap-4'>
              <li>309 3th Floor The Atlanta Business Hub, Nana Chiloda, Ahmedabad, Gujarat 302330</li>
              <li>+91 909 900 5252</li>
              <li>support@onlinesaathi.org</li>
            </ul>

          </div>
        </div>
        <div className='flex justify-center items-center'>
          <ul className='flex gap-10 text-[20px]'>
            <li>Refund Policy</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      {/* section 2 */}
      <div className=' h-[90px] text-white text-xl flex items-center justify-center bg-blue-300'>
        <p className='flex items-center gap-1'>Copyright <BiCopyright/> 2018-2024 Online Saathi. All Rights Received. </p>
      </div>
    </div>
  )
}

export default Footer