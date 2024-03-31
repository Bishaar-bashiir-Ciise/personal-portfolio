import React from 'react'
import '../Style.css'

function Header() {
  return (
    <div className='container'  id='Bio'>
         <h4 className='logo'>Eng bishar <span>Developer</span></h4>
      <nav>

        <a href="#Bio" >Bio</a>
        <a href="#skills">Skills</a>
        <a href="#project">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>


      </nav>
    </div>
  )
}

export default Header
