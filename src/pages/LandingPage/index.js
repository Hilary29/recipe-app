import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import HeaderDown from '../../components/HeaderDown';
import LandingContent from '../../components/LandingContent';

const index = () => {
  return (
    <div className='bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 to-slate-100'>
      <div className='sticky top-0 w-full'>
        <div className="flex justify-between items-center bg-white text-white p-[0.5%] pl-[2%]">
          <div className=" flex items-center "> 
            <img src="logo.png" alt="Logo" className="w-6 h-6 lg:w-8 lg:h-8" />
            <img src='XoDelights.png' alt="Logo" className="w-24 h-8 pt-2"/>
          </div>
          <div className="flex items-center">
            <Link 
            to='/Connexion'
            className=" bg-primary text-white font-semibold border-none px-4 py-2 rounded-md hover:bg-gray-700">
              Connexion
            </Link>
          </div>
        </div>
        <HeaderDown/>
      </div>
      <LandingContent/>       
      <Footer/>
    </div>
  )
}

export default index
