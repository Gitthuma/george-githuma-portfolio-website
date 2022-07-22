import React from 'react'
import './Portfolio.css'
import IMG1 from '../../Assets/portfolio-1.png'
import IMG2 from '../../Assets/portfolio-2.png'


//Create array for mapping the different portfolios
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Personal Portfolio Website',
    github: 'https://github.com/Gitthuma/george-githuma-portfolio-website',
    demo: 'georgegithuma.com'
  },

  {
    id: 2,
    image: IMG2,
    title: 'Organization Portfolio Website',
    github: 'https://github.com/Gitthuma/cup-of-uji-kenya-website',
    demo: 'https://www.cupofujikenya.org/'
  } 
]

function Portfolio() {
  return (
    //Create section with headings
    //Create container and portfolio__container class with article of portfolio__item
    //Inside article, add image, item title and links to github and live demo
    //import image and apply it
    //Duplicate article
    //Add a div to links with a classname of portfolio__item-cta
    //Map the array using js
    
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        
       {
         data.map(({id, image, title, github, demo}) => {
           return (
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
           )
         })
       }

      </div>

    </section>

  )
}

export default Portfolio