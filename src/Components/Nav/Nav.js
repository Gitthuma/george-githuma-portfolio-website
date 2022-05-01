import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'

//To use the active class we have to use use state hook react hooks
//Import use state and apply it
import {useState} from 'react'

//The use state value will be active nav and the update function will be setActiveNav
//This will point to a default that will bring us to the top of the page
// If activeNav is = to # then give it the ctive class if not give it nothing
//If we are to click about, we want to move active class to about using onClick function and className function
//We also want to reset to active class if home is clicked
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      {/*Added icons to the nav component*/}
      <a href='#' onClick={() => setActiveNav('#')} className ={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className ={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href='#experience'><BiBook /></a>
      <a href='#services'><RiServiceLine /></a>
      <a href='#contact'><BiMessageSquareDetail /></a>

    </nav>
  )
}

export default Nav