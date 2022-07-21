import React from 'react'
import './Testimonial.css'
import AVTR1 from '../../Assets/Avatar-1.jpeg'
import AVTR2 from '../../Assets/Avatar-2.jpeg'
import AVTR3 from '../../Assets/Avatar-3.jpeg'
import AVTR4 from '../../Assets/Avatar-4.jpeg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


//Add array of testimonial onbjects to generate testimony dynamicaly
const data = [
  {
    avatar: AVTR1,
    name: 'Randy Davo',
    review: 'Thank you for your time once again George. I really enjoyed our meeting. And thanks for all you shared with me. I can confidently say I learned a lot during the mentorship session. I will start implementing all that we have discussed as I look forward to our next session.'
  },

  {
    avatar: AVTR2,
    name: 'Chenai Chair',
    review: 'Thank you so much for our call last week noting the efforts of your work on Kiswahili Common Voice platform. It truly is fantastic to see how much time and effort you have put into this work. I look forward to continue working together in the coming days and seeing what we can achieve together.'
  },

  {
    avatar: AVTR3,
    name: 'Twahir Hussein',
    review: 'Thank you for the mentorship session with our students. They were really excited to see you code live, interacting with both the terminal and the IDE. This will go a long way in motivating them to work hard on their coding skills so that one day they can be like you.'
  },

  {
    avatar: AVTR4,
    name: 'Nermina Ljevakovic',
    review: 'Thanks for the discussions today George Githuma Njogu. Valuable perspectives shared. I look forward to working with you to mentor our current cohort on their projects. They are currently on their development stage of their applications and would appreciate your feedback on the applications they are developing.'
  }

]

//Apply array

const Testimonials = () => {
  //Add headings
  //Create div for testimonial container with article inside
  //Add Image, client name and review
  //Duplicate article
  return (
    <section id='Testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials