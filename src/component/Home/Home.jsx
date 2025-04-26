import React, { useState } from 'react'
import partner from "../../assets/partner.jpeg"
import aboutus from "../../assets/aboutus.png"
import { FaChevronDown } from "react-icons/fa6";
import Footer from '../Footer/Footer';

const Home = () => {


  const [open, setOpen] = useState(false);
  let ourPartner = [1, 2, 3, 4, 5];
  let strategic = [1, 2, 3]
  let client = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const HandleOpen = (index) => {
    setOpen(prevIndex => prevIndex === index ? null : index);
  }


  return (
    <>
      <div className='mt-18'>
        <div className='w-full h-[92vh] bg-cover text-white flex items-center'
          style={{
            backgroundImage: `url(${partner})`,
          }}
        >
          <div className=' flex flex-col w-[80%] justify-center pl-40 gap-10' style={{ textShadow: "2px 1px 3px gray" }}  >
            <h1 className='text-6xl font-bold tracking-wider'>Partnerships and collabortion</h1>
            <p className='text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quo ea, asperiores natus provident, officiis sint cupiditate quas consequuntur repellendus ducimus voluptates illo iste reprehenderit.</p>
          </div>
        </div>

        {/* section 2 */}

        <div className='m-20'>
          <h1 className='flex items-center gap-2 text-6xl font-bold justify-center mb-10'>Our <span className='text-blue-600'>Partners</span></h1>

          <p className='text-2xl font-medium flex items-center gap-2 pl-20'>What <span className='text-blue-500'>We Offer</span> To Our Partners</p>

          <div className=' h-[600px] p-2 flex items-center justify-around'>
            {ourPartner.map((item, index) => (
              <div className={`w-[320px] rounded-2xl shadow-xl shadow-sky-300 min-h-[380px] p-4 flex flex-col relative scale-75 items-center gap-10 font-medium ${index % 2 === 0 ? "top-30" : "top-0"}`}>
                <p className={`text-2xl text-center ${index % 2 === 0 ? "flex" : "hidden"}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, labore?</p>
                <div className='w-[200px] h-[200px] rounded-full border-3 border-blue-300 flex justify-center items-center'>
                  <img src={aboutus} alt="" className='w-[120px] h-[120px]' />
                </div>
                <p className={`${index % 2 !== 0 ? "flex" : "hidden"} text-2xl text-center`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, labore?</p>
              </div>
            ))}

          </div>
        </div>


        {/* section 3 */}
        <div className='mt-40 mb-20'>
          <div className='flex justify-around items-center min-h-[400px] '>
            {strategic.map((item, index) => (
              <div className={`flex flex-col items-center justify-center gap-4 w-[400px] min-h-[300px] p-4 border-2 border-blue-500 rounded-2xl shadow-xl shadow-blue-400 relative cursor-pointer  ${open === index && "h-[500px] "}`} key={item} onClick={() => HandleOpen(index)}>
                {open !== index && <h1 className='text-8xl font-bold text-blue-200' style={{
                  textShadow: "2px 3px 4px gray"
                }}>{item}</h1>}
                {open !== index && <p className='text-2xl font-medium'>Strategic Partnerships</p>}
                {open === index && <p className='text-xl h-[300px] text-center font-medium text-gray-600 incHeight relative'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi placeat perspiciatis deleniti. Expedita corporis, minima labore maxime sequi ipsum omnis quibusdam animi. Dignissimos sequi eos iure fugiat adipisci eveniet corrupti.</p>}
                <FaChevronDown className='text-8xl absolute -bottom-6 bg-white p-4 rounded-b-full' />
              </div>
            ))}

          </div>

          <p className='text-2xl text-center mt-40 w-[80%] m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, dolores iste? Ipsa odit accusamus saepe, magnam quo facilis nulla non? Lorem ipsum dolor sit amet consectetur adipisicing elit. Id earum doloremque porro, soluta deleniti iure eveniet. Magnam, praesentium! Laborum, dicta?</p>
        </div>

        {/* section 4 */}
        <div className='flex gap-4 overflow-hidden mb-20 h-[300px] items-center pl-4'>
          {client.map((item, index) => (
            <div className='w-[300px] h-[160px] flex-shrink-0  rounded-xl shadow shadow-gray-500 overflow-hidden slideAnim'>
              <img src="" alt="" className='w-full h-full' />
            </div>
          ))}

        </div>

        {/* section 5 */}
        <div className='flex flex-col gap-40 items-center justify-center m-h-[500px] mb-20 p-2 '>
          <p className='text-2xl text-center mt-40 w-[80%] m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, dolores iste? Ipsa odit accusamus saepe, magnam quo facilis nulla non? Lorem ipsum dolor sit amet consectetur adipisicing elit. Id earum doloremque porro, soluta deleniti iure eveniet. Magnam, praesentium! Laborum, dicta?</p>

          <button className='rounded-xl text-white font-medium bg-blue-500 w-[280px] m-h-[80px] p-4 pt-6 pb-6'>Partner With Us</button>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home