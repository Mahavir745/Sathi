import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ServiceDetails from './ServiceDetails';
import SideList from './SideList';

const Service = () => {
  const { allService } = useParams();
  const navigate = useNavigate(); // Hook to update the URL
  const serviceItem = allService.split("_").join(" ");

  const listOfService = ["Multimedia", "Web Development", "Web Hosting", "Graphics Design", "Technical Expertise", "Software Development"];
  const [allDetails, setAllDetails] = useState(serviceItem);

  const handleTabs = (item) => {
    setAllDetails(item); 
    navigate(`/service/${item.toLowerCase().split(" ").join("_")}`); 
  };

  return (
    <>
      <div className='w-[70%] m-auto min-h-[800px] mt-20 flex gap-2'>
        <div className='w-[20%] flex flex-col gap-8 fixed'>
          <div className='text-xl mt-10 text-blue-600 font-bold flex items-center gap-2'>
            Service / <span className='text-gray-800 capitalize'>{serviceItem}</span>
          </div>
          <div className='flex flex-col items-center gap-2 justify-center min-h-[400px] pt-2 pb-2 border border-gray-300'>
            {listOfService.map((item) => (
              <div
                className='flex gap-2 items-center w-[90%] h-[60px] p-2 cursor-pointer hover:scale-95'
                style={{ transition: "all .1s linear" }}
                onClick={() => handleTabs(item)}
                key={item}
              >
                <SideList item={item} serviceItem={serviceItem} />
              </div>
            ))}
          </div>
          <div className='flex flex-col gap-10 h-[400px]'>
            <h1 className='text-2xl font-bold'>Contact Address</h1>
            <p className='text-gray-600'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quos velit commodi voluptates obcaecati porro adipisci repudiandae sequi qui consequuntur.
            </p>
          </div>
        </div>

        <ServiceDetails allDetails={allDetails} />
      </div>
    </>
  );
};

export default Service;
