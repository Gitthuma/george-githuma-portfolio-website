import React from 'react'
import './Header.css'
//Import newly created CTA
import CTA from './CTA'
//import img from assets
import myImg from '../../Assets/George-Githuma-Njogu-img.png'
import HeaderSocials from './HeaderSocials'
import CTA_2 from './CTA_2'

function Header() {
  return (
    <header>
      <div className='container header__container'>
        {/*Create intro title*/}
        <h5>Hello I'm</h5>
        <h1>George Githuma Njogu</h1>
        <h5 className='text-light'>Software Developer</h5>

        {/*Render CTA*/}
        <CTA />

        {/*Render HeaderSocials*/}
        <HeaderSocials />

        {/*Create img div with image*/}
        <div className='my__img'>
          <img src={myImg} alt='George Githuma Njogu Image' />
        </div>

        {/*Render CTA_2*/}
        
        <CTA_2/>

        {/*Create scroll down link*/}
        <a href='#contact' className='scroll__down'>Scroll Down</a>


      </div>

    </header>
  )
}

export default Header