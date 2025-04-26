import React from 'react'
import Footer from '../../Footer/Footer'

const Bill = () => {

  const info = [1, 2, 3]
  return (
    <>
      <div className='mt-15 m-20'>
        <div className='flex justify-between gap-10 h-auto mt-20 p-4'>
          <div className='flex flex-col gap-10 pt-20 p-2 w-[780px]'>
            <div>
              <h1 className='flex gap-2 text-6xl font-bold'><span className='text-blue-500'>Bill Payments:</span><span>BBPS</span></h1>
            </div>
            <div className='text-2xl'>
              Online Saathi's job matching services are dedicated to empowering informal workers by connecting them with employment opportunities that best fit their skills and preferences.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio assumenda officiis, quis aliquid molestiae repellat sit quibusdam a obcaecati delectus provident deserunt ab qui eos quod repellendus culpa similique blanditiis cupiditate enim laudantium libero. Delectus, odit? Inventore molestiae praesentium doloribus?
            </div>
          </div>
          <div className='h-[826px] w-[900px] flex items-center justify-center'>
            <img src="" alt="" className=' border w-[780px] h-[780px]' />
          </div>
        </div>

        {/* section2 */}

        <div className=' w-full flex justify-center gap-4 items-center mt-20 h-[400px]'>

          {info.map((item,index) => (
            <div className={`shadow shadow-blue-400 relative p-4 rounded-4xl w-[400px] h-[200px] flex items-center justify-center ${index %2 == 0 ? "-top-10 bg-gradient-to-r to-blue-400 from-gray-500 text-white":""}`}>
              <p className='text-center text-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam minima odit laborum quisquam dolore.</p>
            </div>
          ))}

        </div>
      </div>
      <Footer />
    </>
  )
}

export default Bill