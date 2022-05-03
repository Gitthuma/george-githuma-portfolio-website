import React from 'react'
import './About.css'
import myImg from '../../Assets/George-Githuma-Njogu-abt-img.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
  return (
    //Change div to section and add id
    //Create heading for the about section
    //Create div for about__container
    //Create divs for the image and the content
    //Add image into the image div
    //Add about cards with articles
    //Add content headings and icons
    //Duplicate icons two times and change content
    //Add paragraph and button after cards articles
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
              <small>3+ Years in Tech</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>4:Completed | 6:Current</small>
            </article>

          </div>

          <p>
            I am a self taught software developer with experience in 
            building applications that help address everyday business 
            and organisational challanges. I am proficient in JavaScript, 
            NodeJs, Python and React; technologies I use to build data 
            collection tools, e-commerce websites, learning management 
            system(LMS), portfolio websites to name a few.

            I am also a certified AWS cloud pracrtitioner, and use the skill 
            to help  businesses and organisations host and run their applications 
            on the cloud.
          </p>

          <a href='https://github.com/Gitthuma' target='_blank' className='btn btn-primary'>Github Profile</a>

        </div>

      </div>
    
    </section>
  )
}

export default About