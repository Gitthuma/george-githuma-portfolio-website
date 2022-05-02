import React from 'react'
import './About.css'
import myImg from '../../Assets/George-Githuma-Njogu-img.png'
import {FaAward} from 'react-icons/fa'

function About() {
  return (
    //Change div to section and add id
    //Create heading for the about section
    //Create div for about__container
    //Create divs for the image and the content
    //Add image into the image div
    //Add about cards with articles
    //Add content headings and icons
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={myImg} alt='About Image'/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
          </div>
        </div>

      </div>
    
    </section>
  )
}

export default About