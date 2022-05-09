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
    //Duplicate article two times to include Mentorships and trainings and Speaking engagements
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className='container service__container'>

        {/*Start of Web Applications*/}
        
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>e-commerce websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Corporate Websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Learning Management Systems (LMS)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Portfoloio websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Contact for a quotation</p>
            </li>
          </ul>
        </article>

        {/*Start of Trainings*/}

        <article className='service'>
          <div className="service__head">
            <h3>Mentorship & Trainings</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>1 Hour virtual training - $35 </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>2 Hours virtual training - $50</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Full day (6-8 Hours) virtual training - $100</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>1 Hour in-person training - $50</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>2 Hours in-person training - $75</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Full day (6-8 Hours) in-person training - $150</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Prices exclusive of transport and accomodation</p>
            </li>
          </ul>
        </article>

        {/*Start of Speaking Engagements*/}

        <article className='service'>
          <div className="service__head">
            <h3>Speaking Engagements</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>1 Hour virtual engagement - $20 </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>2 Hours virtual engagement  - $35</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Full day (6-8 Hours) virtual engagement - $70</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>1 Hour in-person engagement - $30</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>2 Hours in-person engagement  - $50</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Full day (6-8 Hours) in-person engagement  - $100</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Prices exclusive of transport and accomodation</p>
            </li>
          </ul>
        </article>

      </div>
      
    
    </section>
  )
}

export default Services