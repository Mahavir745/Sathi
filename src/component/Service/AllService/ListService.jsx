import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import aboutus from "../../../assets/aboutus.png"

const ListService = ({data}) => {

  let {allService} = useParams()
  const navigate = useNavigate();

  const HandleService = ()=>{

    let path = data.split(" ").join("_").toLowerCase();
    allService = path;
    navigate(`${allService}`)
  }


  return (
    <div className='shadow-xl w-[460px] flex-shrink-0 m-h-[500px] flex flex-col gap-4 justify-center items-center overflow-hidden rounded-2xl border border-blue-700 hover:scale-95 cursor-pointer' style={{transition:"all .6s linear"}} onClick={HandleService}>
      <img src={aboutus} alt="" className='w-full h-[220px]' />

      <div className=' h-[100px] flex flex-col gap-2'>
        <h2 className='text-blue-900 font-medium text-xl'>{data}</h2>
        <p className='line-clamp-2 text-[14px] text-gray-500 w-[280px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, quas? A unde numquam ducimus cupiditate modi voluptates libero! Ipsa, sed?</p>
      </div>

    </div>
  )
}

export default ListService