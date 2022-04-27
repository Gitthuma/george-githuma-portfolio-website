import React from 'react'
import './Header.css'
//Import newly created CTA
import CTA from './CTA'

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
      </div>

    </header>
  )
}

export default Header