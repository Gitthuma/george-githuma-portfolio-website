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

            I am a self taught software developer with proficiency in web 
            technologies including HTML, CSS, JavaScript, NodeJs, Python and 
            React. I enjoy designing and building products and systems that 
            help businesses and organizations easily interact with their customers, 
            collect data efficiently and for e-commerce platforms make seamless 
            payments.

            <br />

            More than web technologies, I am an AWS Certified Cloud Practitioner with 
            knowledge of hosting and migrating applications to the cloud.

            <br />
            I have also recently developed an interest in native applications and I am 
            currently working on my kotlin android skills.

          </p>

          <a href='#contacts' className='btn btn-primary'>Contacts</a>

        </div>

      </div>
    
    </section>
  )
}

export default About