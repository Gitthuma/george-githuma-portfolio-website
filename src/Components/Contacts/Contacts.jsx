import React from 'react'
import './Contacts.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

function Contacts() {
  return (
    //change div to section and add id
    //Add headings
    //Add contacts__container class with contact options inside
    //Add articles inside contact__options
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contacts</h2>

      <div className="container contacts__container">
        
        <div className="contacts__options">
          
          <article className='contact__option'>
            <MdOutlineMail/>
            <h4>Email</h4>
            <h5>george.githuma@gmail.com</h5>
            <a href="mailto:george.githuma@gmail.com">Send an email</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp/>
            <h4>WhatsApp</h4>
            <h5>+254 721 308700</h5>
            <a href="https://api.whatsapp.com/send?phone=+254721308700">Send Whatsapp Message</a>
          </article>

        </div>

      </div>

    </section>
  )
}

export default Contacts