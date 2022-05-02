import React from 'react'

function CTA_2() {
  return (
      //Change class to cta_2
    <div className='cta_2'>
        {/*Assign import with a download attribute to make it downloadable*/}
        {/*Add btn and btn primary class to make them buttons*/}
        <a href={Resume} download className='btn'>Download Resume</a>
        {/*The href is local to the page, we will give the contact section an id of same so that when this is clicked it leads there*/}
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA_2