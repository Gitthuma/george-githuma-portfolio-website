import React from 'react'
import './Testimonial.css'
import AVTR1 from '../../Assets/Avatar-1.jpeg'
import AVTR2 from '../../Assets/Avatar-2.jpeg'
import AVTR3 from '../../Assets/Avatar-3.jpeg'
import AVTR4 from '../../Assets/Avatar-4.jpeg'

function Testimonials() {
  //Add headings
  //Create div for testimonial container with article inside
  //Add Image, client name and review
  //Duplicate article
  return (
    <section id='Testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar one" />
            <h5 className="client__name">Randy Davo</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Adipisci soluta odio debitis sequi dignissimos dicta nesciunt 
              accusantium laboriosam accusamus veniam assumenda omnis, est, 
              esse ducimus corrupti modi sunt illum in.
            </small>
          </div>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar one" />
            <h5 className="client__name">Randy Davo</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Adipisci soluta odio debitis sequi dignissimos dicta nesciunt 
              accusantium laboriosam accusamus veniam assumenda omnis, est, 
              esse ducimus corrupti modi sunt illum in.
            </small>
          </div>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar one" />
            <h5 className="client__name">Randy Davo</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Adipisci soluta odio debitis sequi dignissimos dicta nesciunt 
              accusantium laboriosam accusamus veniam assumenda omnis, est, 
              esse ducimus corrupti modi sunt illum in.
            </small>
          </div>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar one" />
            <h5 className="client__name">Randy Davo</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Adipisci soluta odio debitis sequi dignissimos dicta nesciunt 
              accusantium laboriosam accusamus veniam assumenda omnis, est, 
              esse ducimus corrupti modi sunt illum in.
            </small>
          </div>
        </article>

      </div>

    </section>
  )
}

export default Testimonials