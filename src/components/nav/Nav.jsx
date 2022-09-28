import React from 'react'
import './nav.css'
import {FiHome} from 'react-icons/fi'
import {FiUser} from 'react-icons/fi'
import {BiBook} from 'react-icons/bi'
import {MdComputer} from 'react-icons/md'
import {AiOutlineMessage} from 'react-icons/ai'

const Nav = () => {
  return (
    <nav>
      <a href="#"><FiHome /></a>
      <a href="#about"><FiUser /></a>
      <a href="#experience"><BiBook /></a>
      <a href="#portfolio"><MdComputer /></a>
      <a href="#contact"><AiOutlineMessage /></a>
    </nav>
  )
}

export default Nav