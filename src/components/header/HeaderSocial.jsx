import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {GrTwitter} from 'react-icons/gr'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/syrusfarris/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/SyrusFarris" target="_blank"><FaGithub/></a>
        <a href="https://twitter.com/xsyrious" target="_blank"><GrTwitter/></a>
    </div>
  )
}

export default HeaderSocial