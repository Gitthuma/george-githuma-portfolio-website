import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
    //change div to section and add id
    //Add headings for experience
    //Create experience container with two divs frontend and backend
    //Add frontend heading and container for experience details
    //Add check icon,language and experience to article
    //Duplicate article and populate the duplicates with diff languages for frontend
    //Repeat process for backend
    <section id='experience'>
      <h5>Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>

        <div className='experience__frontend'> 
          <h3>Frontend Development</h3>
          
          <div className='experience__content'>
            
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>HTML</h4>
                <small className='text__light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>CSS</h4>
                <small className='text__light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text__light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>React</h4>
                <small className='text__light'>Experienced</small>
              </div>
            </article>

          </div>

        </div>

        {/*Start of Backend*/}

        <div className='experience__backend'>
          <h3>Backend Development</h3>
          
          <div className='experience__content'>
            
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Node JS</h4>
                <small className='text__light'>Intermidiet</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Python</h4>
                <small className='text__light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Firebase</h4>
                <small className='text__light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>MySQL</h4>
                <small className='text__light'>Intermediate</small>
              </div>
            </article>

          </div> 

         </div> 

         {/*Start of cloud*/}

         <div className='experience__cloud'>
           <h3>Cloud</h3>
              
            <div className='experience__content'>
              
              <article className='experience_details'>
                <BsPatchCheckFill className='experience__details-icons'/>
                <div>
                  <h4>AWS</h4>
                  <small className='text__light'>CCP</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsPatchCheckFill className='experience__details-icons'/>
                <div>
                  <h4>GCP</h4>
                  <small className='text__light'>Intermediate </small>
                </div>
              </article>

            </div> 

            <br />

            <h3>Phones</h3>
              
            <div className='experience__content'>
              
              <article className='experience_details'>
                <BsPatchCheckFill className='experience__details-icons'/>
                <div>
                  <h4>Android</h4>
                  <small className='text__light'>Intermediate</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsPatchCheckFill className='experience__details-icons'/>
                <div>
                  <h4>iOS</h4>
                  <small className='text__light'>Intermediate </small>
                </div>
              </article>

            </div> 

          </div>

      </div>
    
    </section>
  )
}

export default Experience