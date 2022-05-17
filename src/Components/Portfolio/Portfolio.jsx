import React from 'react'
import './Portfolio.css'
import IMG1 from '../../Assets/portfolio-1.png'

function Portfolio() {
  return (
    //Create section with headings
    //Create container and portfolio__container class with article of portfolio__item
    //Inside article, add image, item title and links to github and live demo
    //import image and apply it
    //Duplicate article
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="First portfolio" />
          </div>
          <h3>Portfolio Item Title</h3>
          <a href="" className='btn' target='_blank'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="First portfolio" />
          </div>
          <h3>Portfolio Item Title</h3>
          <a href="" className='btn' target='_blank'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="First portfolio" />
          </div>
          <h3>Portfolio Item Title</h3>
          <a href="" className='btn' target='_blank'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="First portfolio" />
          </div>
          <h3>Portfolio Item Title</h3>
          <a href="" className='btn' target='_blank'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="First portfolio" />
          </div>
          <h3>Portfolio Item Title</h3>
          <a href="" className='btn' target='_blank'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="First portfolio" />
          </div>
          <h3>Portfolio Item Title</h3>
          <a href="" className='btn' target='_blank'>Github</a>
          <a href="" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>

      </div>

    </section>

  )
}

export default Portfolio