import React from 'react'
import './Contacts.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

//import useRef and and emailjs
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contacts = () => {

  //define form and use it as ref in the form
  const form =useRef();

  //Function to send email
  const sendEmail = (e) => {
    e.preventDefault();

    //link 'YOUR_SERVICE_ID', 
    //link 'YOUR_TEMPLATE_ID' 
    //link 'YOUR_PUBLIC_KEY'
    emailjs.sendForm('service_um7fxyv', 'template_p6zge3q', form.current, 'Q3swsdyOMxKcD1Wwg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  
  
  return (
    //change div to section and add id
    //Add headings
    //Add contacts__container class with contact options inside
    //Add articles inside contact__options
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contacts</h2>

      <div className="container contacts__container">

        {/*Contact Option*/}
        
        <div className="contacts__options">
          
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>george.githuma@gmail.com</h5>
            <a href="mailto:george.githuma@gmail.com" target="_blank">Send an Email</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+254 721 308700</h5>
            <a href="https://wa.me/254721308700" target="_blank">Send a Whatsapp Message</a>
          </article>

        </div>

        {/*Form*/}
        {/*Link form using ref*/}
        {/*onSubmit call the send email function*/}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="10" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>


      </div>

    </section>
  )
}

export default Contacts