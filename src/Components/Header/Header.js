import React from 'react'
import './Header.css'
//Import newly created CTA
import CTA from './CTA'
//import img from assets
import myImg from '../../Assets/George-Githuma-Njogu-img.png'

function Header() {
  return (
    <header>
      {/*Create intro title*/}
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>George Githuma Njogu</h1>
        <h5 className='text-light'>Software Developer</h5>

        {/*Render CTA*/}
        <CTA />

        {/*Create img div with image*/}
        <div className='my-img'>
          <img src={myImg} alt='George Githuma Njogu Image' />
        </div>

        {/*Create scroll down link*/}
        <a href='#contact' className='scroll__down'>Scroll Down</a>


      </div>

    </header>
  )
}

export default Header