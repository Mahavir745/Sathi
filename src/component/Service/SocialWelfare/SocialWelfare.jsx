import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import States from './States';
import Schemes from './Schemes';
import CentralSchemes from './CentralSchemes';
import FrequentlyQuestion from './FrequentlyQuestion';
import aboutus from "../../../assets/aboutus.png"
import Footer from '../../Footer/Footer';

const SocialWelfare = () => {

  const [schemes, setSchemes] = useState("Categories");

  const HandleSchemes = (schemesName) => {

    switch (schemesName) {
      case "Categories":
        setSchemes("Categories")
        break;
      case "States":
        setSchemes("States");
        break;
      case "Centeral":
        setSchemes("Central")
        break;
      default: console.log("schemes are not found, Please check the name of the schemes.")
    }
  }

  return (
    <div>
      {/* section 1 */}
      <div className='w-full flex justify-center h-[700px] mt-20'>
        <div className=' w-[55%] flex overflow-hidden'>
          <div className='shadow-md w-[580px] h-[580px] rotate-45 rounded-3xl relative flex-shrink-0 -left-40 top-38 overflow-hidden'>
            <img src={aboutus} alt="img" className='w-full h-full' />
          </div>
          <div className='shadow-md w-[280px] h-[280px] rotate-45 rounded-3xl relative flex-shrink-0 -left-36 top-20 overflow-hidden'>
            <img src={aboutus} alt="img" className='w-full h-full' />
          </div>
          <div className='shadow-md w-[280px] h-[280px] rotate-45 rounded-3xl relative top-76 flex-shrink-0 -left-50 overflow-hidden'>
            <img src={aboutus} alt="img" className='w-full h-full' />
          </div>
        </div>
        <div className=' w-[45%] flex flex-col justify-center gap-8'>
          <h1 className='text-5xl font-bold w-[50%] text-gray-800'><span className='text-green-700'>Discover</span> ipsum dolor sit amet......</h1>
          <p className='text-2xl text-gray-800'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit..</p>
        </div>
      </div>
      {/* section 2 */}
      <div className='flex flex-col items-center'>
        <div className=' flex flex-col items-center gap-6 pt-10 mb-18'>
          <h1 className='text-2xl text-gray-800 font-medium'>#GOVERNMENT SCHEMES / #SCHEMESFORYOU</h1>
          <button className='text-white bg-green-700 font-medium flex justify-center items-center gap-4 w-[272px] h-[51px] rounded-md pt-2 pb-2 '><span>Find Schemes For You</span> <FaArrowRightLong className='text-2xl' /></button>
        </div>
        {/* total schemes --> */}
        <div>
          <ul className='flex items-center justify-around gap-[40px]'>
            <li className='w-[353px] h-[140px] bg-green-100 rounded-2xl  flex flex-col items-center justify-center'>
              <span className='text-5xl font-medium text-gray-800'>3240+</span>
              <span className='flex items-center gap-2 text-gray-600'>Total Schemes <FaArrowRightLong /></span>
            </li>
            <li className='w-[353px] h-[140px] bg-green-100 rounded-2xl  flex flex-col items-center justify-center'>
              <span className='text-5xl font-medium text-gray-800'>520+</span>
              <span className='flex items-center gap-2 text-gray-600'>Central Schemes <FaArrowRightLong /></span>
            </li>
            <li className='w-[353px] h-[140px] bg-green-100 rounded-2xl  flex flex-col items-center justify-center'>
              <span className='text-5xl font-medium text-gray-800'>2720+</span>
              <span className='flex items-center gap-2 text-gray-600'>States/UTs Schemes <FaArrowRightLong /></span>
            </li>
          </ul>
        </div>
        {/* total categories/states/centeral Minister */}

        <div className=' mt-[80px] mb-[80px] flex flex-col items-center'>
          <div className='h-[144px] mb-[32px] flex flex-col justify-between items-center'>
            <ul className='flex justify-center gap-10 text-[16px] font-bold text-gray-600'>
              <li className={`${schemes === "Categories" && "bg-green-200 text-green-700 "} pl-4 pr-4 pt-1 pb-1 rounded-sm cursor-pointer`} onClick={() => HandleSchemes("Categories")}>Categories</li>
              <li className={`${schemes === "States" && "bg-green-200 text-green-700"} pl-4 pr-4 pt-1 pb-1 rounded-sm cursor-pointer`} onClick={() => HandleSchemes("States")}>States/UTs</li>
              <li className={`${schemes === "Central" && "bg-green-200 text-green-700"} pl-4 pr-4 pt-1 pb-1 rounded-sm cursor-pointer`} onClick={() => HandleSchemes("Centeral")}>Centeral Ministers</li>
            </ul>
            {/* categories label */}
            <p className='text-4xl w-[70%] font-medium text-center'>Lorem ipsum dolor sit amet.</p>
          </div>

          {/* schemes */}
          <ul className='flex flex-wrap gap-8 w-[1140px] p-[16px] mb-[24px] '>
            {(schemes === "Categories" && <Schemes />) || (schemes === "States" && <States />) || (schemes === "Central" && <CentralSchemes />)}
          </ul>
          <button className='w-[120px] h-[42px] rounded-md border border-green-700 text-green-700 flex items-center justify-center gap-4'><span>View all</span> <FaArrowRightLong /></button>
        </div>

        {/* how to work */}
        <div className=' w-[1140px] flex flex-col gap-[80px] pt-[80px] pb-[80px]'>
          <div className='text-center flex flex-col items-center gap-6'>
            <p className='text-gray-600 text-[20px]'>How it works</p>
            <p className='text-[38px] font-bold text-gray-800 w-[497px]'>Easy steps to apply for governments schemes</p>
          </div>
          <div>
            <ul className='flex justify-between'>
              <li className='w-[279px] h-[228px] flex flex-col items-center justify-center text-center gap-4 shadow-md rounded-2xl'>
                <img src={aboutus} alt="" className=' w-[61px] h-[61px]' />
                <h3 className='text-green-400 font-medium text-xl'>Enter Details</h3>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li className='w-[279px] h-[228px] flex flex-col items-center justify-center text-center gap-4 shadow-md rounded-2xl'>
                <img src={aboutus} alt="" className=' w-[61px] h-[61px]' />
                <h3 className='text-green-400 font-medium text-xl'>Enter Details</h3>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
              <li className='w-[279px] h-[228px] flex flex-col items-center justify-center text-center gap-4 shadow-md rounded-2xl'>
                <img src={aboutus} alt="" className=' w-[61px] h-[61px]' />
                <h3 className='text-green-400 font-medium text-xl'>Enter Details</h3>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </li>
            </ul>
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className='text-green-600 font-bold text-4xl mb-[24px]'>About</h3>
          <div className='flex justify-between w-[1140px] items-center'>
            <div className='w-[558px] h-[428px] flex flex-col justify-between'>
              <p className='text-gray-500 text-xl tracking-wider leading-7'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At veniam recusandae enim cum, possimus voluptate tenetur illo obcaecati libero debitis mollitia quo consequuntur reiciendis praesentium veritatis quasi? Fuga, eaque ipsum? <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas non atque molestiae ipsam ea a delectus, est ipsa corrupti similique dicta odit amet eaque numquam beatae ipsum maiores id iusto enim eius aspernatur? Veniam optio dolorem error in vitae at totam tempore maiores voluptas nam, consectetur, modi, autem numquam.
              </p>

              <button className='text-green-700 border flex items-center justify-evenly rounded-md border-green-700 w-[156px] h-[46px]'><span>View More</span> <FaArrowRightLong /></button>
            </div>
            <div className='w-[558px] h-[348px] shadow-xl rounded-xl overflow-hidden'>
              <img src={aboutus} alt="img" className='w-full h-full object-cover' />
            </div>
          </div>
        </div>

        {/* frequency asked question */}
        <div className=' w-[1140px] mt-[180px] mb-[80px]'>
          <div className='flex justify-between  items-center '>
            <div className='w-[558px] h-[348px] shadow-xl rounded-xl sticky'>
              <img src={aboutus} alt="img" />
            </div>
            <div className='w-[558px] min-h-[394px] flex flex-col'>
              <p className='text-gray-500'>Frequently Asked Questions</p>
              <div className=' p-2'>
                <h1 className='text-4xl font-bold mb-[40px]'>Checkout our knowledge base for some of your answers!</h1>
                <div className=' min-h-[64px] flex flex-col justify-center'>
                  <FrequentlyQuestion />
                </div>
                <button className='text-green-700 border flex items-center justify-evenly rounded-md border-green-700 w-[156px] h-[46px] mt-[20px]'><span>View More</span> <FaArrowRightLong /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/*footer */}
      <Footer />
    </div>
  )
}

export default SocialWelfare