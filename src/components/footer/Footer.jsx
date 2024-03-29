import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {GrTwitter} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'></a>

        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
        <a href="https://www.linkedin.com/in/syrusfarris/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/SyrusFarris" target="_blank"><FaGithub/></a>
        <a href="https://twitter.com/syrusfarris" target="_blank"><GrTwitter/></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; Syrus Farris. All rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer