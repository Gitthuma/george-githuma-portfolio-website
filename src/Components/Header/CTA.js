import React from 'react'
//import cv from assets
import Resume from '../../Assets/George-Githuma-Resume.pdf'

//Create Download Resume link and Let's Talk link
function CTA() {
  return (
    <div className='cta'>
        {/*Assign import with a download attribute to make it downloadable*/}
        <a href={Resume} download>Download Resume</a>
        {/*The href is local to the page, we will give the contact section an id of same so that when this is clicked it leads there*/}
        <a href='#contact'>Let's Talk</a>
    </div>
  )
}

export default CTA