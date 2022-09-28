import React from 'react'
import './about.css'
import ME from '../../assets/Me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsFolder} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>About
      <h5>Get To Know</h5>
      <h2> About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>University of Texas Bootcamp Graduate</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Team Player</small>
            </article>

            <article className='about__card'>
              <BsFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ completed Projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum similique distinctio deleniti enim aliquam, sunt perferendis nobis soluta ab quo doloremque accusantium esse saepe, labore commodi hic facilis velit natus!
          </p>

          <a href="#contact" className='btn btn-primary'> Let's Chat!</a>
        </div>
      </div>
      </section>
  )
}

export default About