import React from 'react'
import ListOfNetwork from './ListOfNetwork'
import aboutus from "../../../assets/aboutus.png"
import Footer from '../../Footer/Footer';

const NeoBanking = () => {

  const listExplore = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className='mt-20 m-20'>
        {/* section 1 */}
        <div className='flex m-15 justify-between gap-10 h-auto mt-20 p-4'>
          <div className='flex flex-col gap-30 mt-40 w-[700px]'>
            <div>
              <h1 className='flex gap-2 text-6xl font-bold'><span>Neo</span><span className='text-blue-500'>Banking</span></h1>
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
        <div className='flex flex-col gap-20 items-center'>
          <h1 className='flex items-center gap-2 text-4xl font-bold  capitalize'>How our Saathi Networks <span className='text-blue-600'>Works</span></h1>
          <div className='flex flex-wrap w-[80%]'>
            <ListOfNetwork />
          </div>
        </div>

        {/* section 3 */}
        <div className='mt-20'>
          <h1 className='flex gap-2 items-center font-bold text-4xl justify-center'>Explore our services and connet with a <span className='text-blue-500'>Sewa Saathi Today!</span></h1>
          <ul className='flex w-[90%] overflow-y-scroll slide  m-auto mt-20 gap-4  p-2'>
            {listExplore.map((item, index) => (
              <li className='w-[379px] h-[468px] flex flex-col items-center justify-center text-center gap-4 shadow-md shadow-pink-300 rounded-2xl overflow-hidden flex-shrink-0' key={item}>
                <img src={aboutus} alt="" className=' w-full h-[240px]' />
                <h3 className='text-green-400 font-medium text-xl'>Enter Details</h3>
                <p className='p-2'>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nihil eaque sunt blanditiis laboriosam voluptas minus veritatis repudiandae distinctio velit.</p>
              </li>
            ))}

          </ul>
        </div>
      </div>
      
      {/* section 4 */}
      <div className='h-[110px] border-t-1 text-gray-800 mt-40 border-gray-600 flex items-center pl-10'>
        <h1 className='flex gap-2 text-5xl font-bold'>Become a Saathi and earn upto <span className='text-blue-600'>20k</span></h1>
      </div>
      <Footer/>
    </>
  )
}

export default NeoBanking