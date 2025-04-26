import React from 'react'

const ProcessAtm = () => {

  let arr = [1, 2, 3, 4, 5, 6, 7]
  return (
    <div>
      <h1 className='flex gap-2 text-4xl font-medium justify-center mt-30'><span>Process for new PAN card</span><span className='text-blue-600'>Application</span></h1>
      <div className='mt-20 flex justify-center flex-wrap gap-8 w-[1200px] m-auto'>
        {arr.map((item,index) => (
          <div className={`w-[400px] h-auto  shadow shadow-gray-500 flex flex-col justify-center items-center p-4 gap-2 relative font-medium ${index % 2 === 0 && index !== arr.length-1 ? "bg-gradient-to-r to-teal-100 from-white  text-gray-900  ":""}`} key={item}>
            <img src="" alt="" className='w-[120px] h-[120px]' />
            <h4 className={`text-2xl rounded-full border w-[60px] h-[60px] flex items-center justify-center border-gray-400 text-gray-500 font-bold ${index %2 == 0? "bg-white":""}`}>{item}</h4>
            <p className='text-[14px] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum doloremque soluta sit esse officia.</p>
          </div>
          
        ))}

      </div>
    </div>
  )
}

export default ProcessAtm