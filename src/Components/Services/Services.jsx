import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

function Services() {
  return (
    //Change div to section and add id
    //Add headings to services section
    //Create container with article inside
    //inside article add div of class service head with h3 tag inside
    //inside article create list with icon and paragraph after div
    //Duplicate li tag several times
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className='container service__container'>
        
        <article className='service'>
          <div className="service__head">
            <h3>Web Applications</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

      </div>
      
    
    </section>
  )
}

export default Services