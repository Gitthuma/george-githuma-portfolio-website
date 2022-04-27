import React from 'react'
import './Header.css'

function Header() {
  return (
    <header>
      {/*Create intro title*/}
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>George Githuma Njogu</h1>
        <h5 className='text-light'>Software Developer</h5>
      </div>

    </header>
  )
}

export default Header