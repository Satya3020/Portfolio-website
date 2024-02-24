import React from 'react';
import {FaGithub, FaLinkedin, FaInstagram, FaWhatsapp} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <p>Contact me at!</p>
      <div className='footerLinks'>
        <a href="https://github.com/Satya3020" target='_blank'><FaGithub/></a>
        <a href="www.linkedin.com/in/satyavarssheni-ra-v-37a1161b2" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:satyavarsshenivenkatesulu@gmail.com' target='_blank'><GrMail/></a>
        <a href='mailTo:satyavarsshenira.24cs@licet.ac.in' target='_blank'><GrMail/></a>
        <a href="https://www.instagram.com/satyavarssheni?igsh=MWxrODVzcmx4dW92Zw==" ><FaInstagram /></a>
        <FaWhatsapp/>
      </div>
      <p>+91 7695945182</p>
      
    </footer>
  )
}

export default Footer