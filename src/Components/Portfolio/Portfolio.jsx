import React from 'react'
import './Portfolio.css'
import IMG1 from '../../Assets/portfolio-1.png'
import IMG2 from '../../Assets/portfolio-2.png'

function Portfolio() {
  return (
    //Create section with headings
    //Create container and portfolio__container class with article of portfolio__item
    //Inside article, add image, item title and links to github and live demo
    //import image and apply it
    //Duplicate article
    //Add a div to links with a classname of portfolio__item-cta
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="First portfolio" />
          </div>
          <h3>Portfolio Item Title</h3>
          <div className='portfolio__item-cta'>
            <a href="" className='btn' target='_blank'>Github</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Second portfolio" />
          </div>
          <h3>Portfolio Item Title</h3>
          <div className='portfolio__item-cta'>
            <a href="" className='btn' target='_blank'>Github</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="First portfolio" />
          </div>
          <h3>Portfolio Item Title</h3>
          <div className='portfolio__item-cta'>
            <a href="" className='btn' target='_blank'>Github</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="First portfolio" />
          </div>
          <h3>Portfolio Item Title</h3>
          <div className='portfolio__item-cta'>
            <a href="" className='btn' target='_blank'>Github</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="First portfolio" />
          </div>
          <h3>Portfolio Item Title</h3>
          <div className='portfolio__item-cta'>
            <a href="" className='btn' target='_blank'>Github</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="First portfolio" />
          </div>
          <h3>Portfolio Item Title</h3>
          <div className='portfolio__item-cta'>
            <a href="" className='btn' target='_blank'>Github</a>
            <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        

      </div>

    </section>

  )
}

export default Portfolio