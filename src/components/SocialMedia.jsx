import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF,FaLinkedin  } from 'react-icons/fa';


const SocialMedia =()=> {
  return (
    <div className='app__social'>
    <div>
    <a href='https://www.linkedin.com/in/fernandobustillos/' target='_blank' >
        <FaLinkedin/>
        </a>
        
    </div>
    <div>
        <FaFacebookF/>
    </div>
    <div>
        <BsInstagram/>
    </div>
      
    </div>
  )
}

export default SocialMedia
