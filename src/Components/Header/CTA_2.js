import React from 'react'
//import cv from assets
import Resume from '../../Assets/George-Githuma-Resume.pdf'

function CTA_2() {
  return (
      //Change class to cta_2
    <div className='cta__2'>
        {/*Remove download botton*/}

        {/*Switch the buttons*/}
        {/*The href is local to the page, we will give the contact section an id of same so that when this is clicked it leads there*/}
        <a href='https://www.linkedin.com/in/georgegithuma/' target='_blank' className='btn btn-primary'> LinkedIn Profile</a>
    </div>
  )
}

export default CTA_2