import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../assets/aboutus.png"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const TestCard = () => {



  let settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    infinite: true,
    centerMode: true,
    centerPadding: "10px",
    focusOnSelect: true,
  };



  let cardInfo = [
    {
      name: "Mahavir",
    },
    {
      name: "Kumar"
    },
    {
      name: "Mahato"
    },
    {
      name: "Mahato"
    },

  ];

  return (
    <div className='w-[80%] p-4 '>
      <Slider {...settings}>
        {
          cardInfo.map((item, index) => (
            <div className={`shadow shadow-gray-500  h-[440px] rounded-4xl`} key={index} >
              <div className='flex flex-col items-center gap-2'>
                <img src={img} alt="img" className="w-[140px] h-[140px] border-6 rounded-full" />
                <h3 className='font-medium text-2xl'>{item.name} </h3>
                <p>Partner</p>
              </div>
              <div className=' text-center relative '>
                <span className='text-8xl left-0 absolute dotsId'>"</span>
                <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, iure inventore, deserunt temporibus impedit molestiae laudantium </p>
                <span className='text-8xl absolute top-22 right-25 dotsId'>"</span>
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  )
}

export default TestCard

