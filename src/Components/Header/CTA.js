import React from 'react'

//Create Download Resume link and Let's Talk link
function CTA() {
  return (
    <div className='cta'>
        {/*Remove link*/}

        {/*The href is local to the page, we will give the contact section an id of same so that when this is clicked it leads there*/}
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA