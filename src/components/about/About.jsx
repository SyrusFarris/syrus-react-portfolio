import React from 'react'
import './about.css'
import ME from '../../assets/Me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsFolder} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
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
              <small>Group Projects & Solo Projects</small>
            </article>

            <article className='about__card'>
              <BsFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>
            Hi! I'm Syrus welcome to my portfolio. I am a Social Worker now embarking on my journey of full stack web development. After attending the Web Development bootcamp at the University of Texas in Austin and gaining a variety of job ready skills. I am ready to help those in need of my services and to gain more knowledge to further grow as a developer! My skill set also includes Git, and some Python and Solidity (which both I'm actively still developing) Please reach out to me for more information or to get know me better! Thank you for your time! Hope to hear from you soon! :D
          </p>

          <a href="#contact" className='btn btn-primary'> Let's Chat!</a>
        </div>
      </div>
      </section>
  )
}

export default About