import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
    //change div to section and add id
    //Add headings for experience
    //Create experience container with two divs frontend and backend
    //Add frontend heading and container for experience details
    //Add check icon,language and experience
    <section id='experience'>
      <h5>Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>

        <div className='experience__frontend'> 
          <h3>Frontend Development</h3>
          
          <div className='experience__content'>
            <article className='experience_details'>
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className='text__light'>Experienced</small>
            </article>
          </div>

        </div>

        <div className='experience__backend'>

        </div>


      </div>
    
    </section>
  )
}

export default Experience