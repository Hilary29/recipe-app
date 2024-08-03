import React from 'react';
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram} from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='bottom-0 left-0 w-full bg-secondary text-white  p-[2%] mt-4 '>
      <div >
        <ul className='flex space-x-[5%] justify-center cursor-pointer'>
          <li>
            <FaFacebook/> 
          </li>
          <li>
            <FaInstagram/>
          </li>
          <li>
            <FaLinkedin/>
          </li>
          <li>
            <FaYoutube/>
          </li>
        </ul>       
      </div>
      <div >
        <ul className='flex space-x-[20%] justify-center mt-8 pb-2'>
          <li> 
            <p>Contact</p>
            <p>Contact</p>
          </li>
          <li>
            <p>A propos</p>
            <p>A propos</p>
          </li>
          <li>
            <p>sd</p>
            <p>sd</p>
          </li>
          <li>
          <p>sd</p>
          <p>sd</p>
          </li>
        </ul>       
      </div>
      <div className='p-4 flex justify-center'>
        <ul className=' text-sm text-center'>     
          <li>
          <img src='XoDelightswhite.png' alt="LogoX" className="w-22 h-6 pl-1"/>
          {'\u00a9'}
            Hilary29
          </li>
          <li>
            Tous droits reserves
          </li>
        </ul>
      </div>
    </div>
        
    
  )
}

export default Footer
