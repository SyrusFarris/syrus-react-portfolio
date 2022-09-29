import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'



const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Austin Travel Guide',
    github: 'https://github.com/SyrusFarris/austin-travel-guide',
    demo: 'https://syrusfarris.github.io/austin-travel-guide/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Pixleview',
    github: 'https://github.com/SyrusFarris/pixleview-anon',
    demo: 'https://glacial-scrubland-16124.herokuapp.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Honda Auto Quiz',
    github: 'https://github.com/SyrusFarris/honda-fact-quiz',
    demo: 'https://syrusfarris.github.io/honda-fact-quiz/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Work Day Scheduler',
    github: 'https://github.com/SyrusFarris/work-day-scheduler',
    demo: 'https://syrusfarris.github.io/work-day-scheduler/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Password Generator',
    github: 'https://github.com/SyrusFarris/password-generator',
    demo: 'https://syrusfarris.github.io/password-generator/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Run Buddy',
    github: 'https://github.com/SyrusFarris/run-buddy',
    demo: 'https://syrusfarris.github.io/run-buddy/'
  }
]

const Portfolio = () => {
  return (
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
                <div className="portfolio__item-cta">
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