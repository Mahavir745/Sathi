import React from 'react'
import ListService from './ListService'
import service from "../../../assets/service.jpg"


const AllService = () => {


  const allService = [
    {
      id: 1,
      title: "SOFTWARE DEVELOPMENT"
    },
    {
      id: 2,
      title: "WEB DEVELOPMENT"
    },
    {
      id: 3,
      title: "WEB HOSTING"
    },
    {
      id: 4,
      title: "TECHNICAL DEVELOPMENT"
    },
    {
      id: 5,
      title: "GRAPHICS DESIGN"
    },
    {
      id: 6,
      title: "MULTIMEDIA"
    }
  ]

  return (
    <>
      {/* section 1 */}
      <div className='w-full h-[92vh] bg-cover text-white flex items-center'
        style={{
          backgroundImage: `url(${service})`,
        }}
      >
        <div className=' flex flex-col w-[80%] justify-center pl-40 gap-10' style={{ textShadow: "2px 1px 3px gray" }}  >
          <h1 className='text-6xl font-bold tracking-wider'>Partnerships and collabortion</h1>
          <p className='text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quo ea, asperiores natus provident, officiis sint cupiditate quas consequuntur repellendus ducimus voluptates illo iste reprehenderit.</p>
        </div>
      </div>

      {/* section 2 */}
      <div className='mt-40 m-20'>
        <div>
          <h1 className='text-blue-900 font-bold text-6xl text-center mb-20'>OUR SERVICE</h1>
          <div className=' flex flex-wrap gap-10 justify-center items-center p-2'>
            {allService.map((item, index) => (
              <ListService key={item.id} data={item.title} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default AllService