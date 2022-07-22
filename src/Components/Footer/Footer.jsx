import React from 'react'
import './Footer.css'

//import icons
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

function Footer() {
  return (
    
    //link to logo
    //create permalinks
    //Add socials
    //Add copyright

    <footer>
      
      <a href="#" className='footer_logo'>georgegithuma.com</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/georgegithuma/"><BsLinkedin/></a>
        <a href="https://www.linkedin.com/in/georgegithuma/"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All rights reserved by the owner, georgegithuma.com </small>
      </div>


    </footer>
  )
}

export default Footer