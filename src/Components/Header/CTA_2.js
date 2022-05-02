import React from 'react'
//import cv from assets
import Resume from '../../Assets/George-Githuma-Resume.pdf'

function CTA_2() {
  return (
      //Change class to cta_2
    <div className='cta_2'>
        {/*Remove download botton*/}

        {/*Assign import with a download attribute to make it downloadable*/}
        {/*Add btn and btn primary class to make them buttons*/}
        <a href={Resume} download className='btn'>Download Resume</a>
    </div>
  )
}

export default CTA_2