import React from 'react';

const SideList = ({ item, serviceItem }) => {
  return (
    <>
      <div className={`h-[40px] border-gray-400 border w-[6px] rounded-full ${(item.toLowerCase()) === serviceItem ? "bg-blue-500" : "bg-transparent"}`}></div>
      <p className={`font-bold ${(item.toLowerCase()) === serviceItem ? "text-blue-500" : "text-gray-700"}`}>{item}</p>
    </>
  );
};

export default SideList;
