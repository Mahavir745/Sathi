import React, { useEffect, useRef, useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import logo from "../../assets/OsLogo.png";
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [rotate, setRotate] = useState(false);
  const [rotate2, setRotate2] = useState(false);
  const serviceMenu = useRef();
  const serviceMenu1 = useRef();

  const HandleRotate = () => {
    setRotate(state => !state);
  }
  const HandleRotate2 = () => {
    setRotate2(state => !state);
  }

  const closeDropdowns = () => {
    setRotate(false);
    setRotate2(false);
  };

  useEffect(() => {
    const HandleRotateTrigger = (event) => {
      if (
        serviceMenu1.current && 
        !serviceMenu1.current.contains(event.target) &&
        !event.target.closest(".rotate-menu-trigger")
      ) {
        setRotate(false);
      }
    };
  
    document.addEventListener("mousedown", HandleRotateTrigger);
  
    return () => {
      document.removeEventListener("mousedown", HandleRotateTrigger);
    };
  }, []);
  
  useEffect(() => {
    const HandleRotateTrigger2 = (event) => {
      if (
        serviceMenu.current && 
        !serviceMenu.current.contains(event.target) &&
        !event.target.closest(".rotate-menu-trigger2")
      ) {
        setRotate2(false);
      }
    };
  
    document.addEventListener("mousedown", HandleRotateTrigger2);
  
    return () => {
      document.removeEventListener("mousedown", HandleRotateTrigger2);
    };
  }, []);
  

  return (
    <div>
      <div className='h-[77px] w-full bg-white  flex justify-between pl-12 pr-40 border-b-1 border-gray-400 fixed top-0 z-30'>
        <div className='flex gap-4'>
          <div className='w-[77px] h-[77px]'>
            <img src={logo} alt="" className='w-full h-full' />
          </div>
          <div className='flex items-center gap-1'>
            <span className='text-red-600 text-3xl font-medium'>Online</span>
            <span className='text-green-700 text-3xl font-medium'>Saathi</span>
          </div>
        </div>
        <ul className='flex items-center gap-16 text-[15px] font-medium relative'>
          <li className='hover:text-blue-600 cursor-pointer'>
            <NavLink to={"/"} onClick={closeDropdowns} className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}>Partners</NavLink>
          </li>
          <li className='hover:text-blue-600 cursor-pointer'>
            <NavLink to={"/saathi"} onClick={closeDropdowns} className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}>Saathi</NavLink>
          </li>
          <li className='flex items-center gap-2 hover:text-blue-600 cursor-pointer rotate-menu-trigger' onMouseOver={HandleRotate}>
            <span>Services</span> 
            <FaChevronDown className={`${rotate ? "rotate-180" : "rotate-0"}`} />
          </li>
          {rotate && (
            <li className='absolute shadow top-[62px] z-10 left-[224px] bg-white' ref={serviceMenu1}>
              <ul className='flex flex-col gap-4 p-4 relative'>
                <li className='hover:text-blue-600 cursor-pointer'>
                  <NavLink to={"/service"} onClick={closeDropdowns} className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}>All services</NavLink>
                </li>
                <li className='hover:text-blue-600 cursor-pointer'>
                  <NavLink to={"/safe-jobs"} onClick={closeDropdowns} className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}> Safe jobs connect</NavLink>
                </li>
                <hr />
                <li className='hover:text-blue-600 cursor-pointer'>
                  <NavLink to={"/schemes"} onClick={closeDropdowns} className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}> Socail Welfare schemes</NavLink>
                </li>
                <li className='hover:text-blue-600 cursor-pointer'>
                  <NavLink to={"/our-community"} onClick={closeDropdowns} className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}> Our community</NavLink>
                </li>
                <li className='flex items-center gap-2 hover:text-blue-600 cursor-pointer rotate-menu-trigger2' onMouseOver={HandleRotate2}>
                  <span>On demand services</span>
                  <FaChevronDown className={`${rotate2 ? " -rotate-90" : "rotate-0"}`} />
                </li>
                {rotate2 && (
                  <li className='absolute min-w-[200px] shadow left-[200px] top-[180px] bg-white' ref={serviceMenu}>
                    <ul className='flex flex-col gap-4 p-4 '>
                      <li className='hover:text-blue-600 cursor-pointer'>
                        <NavLink to={"/microAtm"} onClick={closeDropdowns} className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}>Micro ATM</NavLink>
                      </li>
                      <li className='hover:text-blue-600 cursor-pointer'>
                        <NavLink to={"/pan-card"} onClick={closeDropdowns} className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}>Pan card center</NavLink>
                      </li>
                      <hr />
                      <li className='hover:text-blue-600 cursor-pointer'>
                        <NavLink to={"/"} onClick={closeDropdowns} className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}>Travel</NavLink>
                      </li>
                      <li className='hover:text-blue-600 cursor-pointer'>
                        <NavLink to={"/"} onClick={closeDropdowns} className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}>Insurance</NavLink>
                      </li>
                      <li className='hover:text-blue-600 cursor-pointer'>
                        <NavLink to={"/bill-payment"} onClick={closeDropdowns} className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}>Bill payment</NavLink>
                      </li>
                      <hr />
                      <li className='hover:text-blue-600 cursor-pointer'>
                        <NavLink to={"/neo_banking"} onClick={closeDropdowns} className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}>Neo banking</NavLink>
                      </li>
                      <li className='hover:text-blue-600 cursor-pointer'>
                        <NavLink to={"/"} onClick={closeDropdowns} className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}>Indo-Nepal remittlance</NavLink>
                      </li>
                    </ul>
                  </li>
                )}
              </ul>
            </li>
          )}
          <li className='hover:text-blue-600 cursor-pointer'>
            <NavLink to={"/technology"} onClick={closeDropdowns} className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}> Technology </NavLink>
          </li>
          <li className='hover:text-blue-600 cursor-pointer'>
            <NavLink to={"/about"} onClick={closeDropdowns} className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}> About Us</NavLink>
          </li>
          <li className='text-white bg-blue-500 rounded-2xl w-[174px] h-[52px] flex items-center justify-center'>Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
