import React from 'react'
//import cv from assets
import Resume from '../../Assets/George-Githuma-Resume.pdf'

//Create Download Resume link and Let's Talk link
function CTA() {
  return (
    <div className='cta'>
        {/*Remove link*/}

        {/*Switch buttons*/}
        
        {/*Assign import with a download attribute to make it downloadable*/}
        {/*Add btn and btn primary class to make them buttons*/}
        <a href={Resume} download className='btn'>Download Resume</a>

        {/*Add linked in button*/}
        <a href='https://www.linkedin.com/in/georgegithuma/' target='_blank' className='btn btn-primary'> LinkedIn Profile</a>

    </div>
  )
}

export default CTA