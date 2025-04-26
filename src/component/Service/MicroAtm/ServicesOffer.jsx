import React from 'react'

const ServicesOffer = () => {
  return (
    <div className=' p-4 shadow-gray-600 shadow rounded-md w-[380px] flex flex-col gap-8'>
      <h1 className='flex gap-1 text-2xl font-bold justify-center'><span>Cash</span><span className='text-blue-600'>Withdrawal</span></h1>
      <img src="" alt="" className='h-[200px]' />
      <div>
        <h2 className='font-medium'>Details:</h2>
        <p className='text-[12px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores blanditiis placeat ut quae earum. Quam ex et atque fuga magnam.</p>
        <button className='text-white font-medium bg-green-700 pt-2 pb-2 rounded-2xl p-10 ml-auto block'>Apply</button>
      </div>
    </div>
  )
}

export default ServicesOffer