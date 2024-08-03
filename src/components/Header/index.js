
import React from 'react';
import { FaUser } from 'react-icons/fa6';



const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center bg-white text-white px-[4%] py-[0.5%]">
        <div className=" flex items-center cursor-pointer "> 
          <img src="logo.png" alt="Logo" className="w-6 h-6 lg:w-8 lg:h-8" />
          <img src='XoDelights.png' alt="Logo" className="w-24 h-8 pt-2"/>
        </div>
        <div className="flex items-center">
          <FaUser className=' text-[#460202] text-2xl cursor-pointer' />
        </div>
      </div>
    </div>
    
  )
}

export default Header
