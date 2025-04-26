import React from 'react'
import aboutus from "../../../assets/aboutus.png"
import { IoCheckmarkCircleOutline } from 'react-icons/io5'

const ServiceDetails = ({allDetails}) => {

  const list = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <div className='w-[70%] ml-[30%]  flex flex-col gap-1 items-center'>
      <div className='w-full h-[400px]'>
        <img src={aboutus} alt="" className='w-full h-full' />
      </div>
      <div className='flex flex-col gap-8 p-2'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-4xl font-bold'>{allDetails}, dolor sit amet consectetur adipisicing elit. Velit optio fugiat a.</h1>
          <p className='text-gray-600 text-[14px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti cum ad porro similique corporis laborum, rerum maxime nostrum nihil expedita ea eius aspernatur molestiae exercitationem dignissimos magnam accusamus neque eveniet
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae commodi nesciunt quam labore voluptatum odit sequi pariatur repellat ducimus aperiam..</p>
        </div>
        <ul className=' list-inside flex flex-col gap-4'>
          {list.map((item, index) => (
            <li className='flex gap-2 items-center' key={item}>
              <IoCheckmarkCircleOutline className='text-2xl text-blue-800' />
              <span className='text-[14px] text-gray-600'>FREE ADD-Ons with every Domain Registration</span>
            </li>
          ))}

        </ul>
        <div className=' w-full h-auto'>
          <p className='text-[15px] text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, eos totam blanditiis labore amet expedita ex sequi deleniti, maiores iste minus eius? Maxime, impedit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aliquam natus eum excepturi impedit culpa! Dolorem tenetur laborum minima perspiciatis!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, quo ipsa enim fugiat nulla harum dolor velit quod magnam, doloribus quae iure qui! Sint praesentium repudiandae aut quos! Omnis, dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ducimus assumenda porro qui consequatur asperiores numquam dolor, quas tempora quae rem animi amet accusantium dignissimos. Optio excepturi, tempora nisi eum esse ducimus praesentium ipsum nobis beatae suscipit nam, temporibus asperiores?
          </p>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetails