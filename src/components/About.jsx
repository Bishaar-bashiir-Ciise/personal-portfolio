import React from 'react'
import musawir from "../Image/bishaar.jpg"

function About() {
    const name = 'Bishar bashiir';
    const university= 'Jamhuria University (JUST)'
  return (
    
    
  <div className="skills-container" >
  <ul>
    <li>
      <img style={{
        borderRadius: '10%',
        width: '330px',
        height: '330px',
        marginTop: '10px',
        marginBottom: '10px',

      }} src={musawir}alt="HTML5" />
      <h2 className='title'>Hi, I'm {name}</h2>
      <p>
            i'm full stack developer at jamhuriya university of technology and science in mogadishu somalia.
            i'm currently working as a full-stack developer. i graduated high school at Al-Anwaar primary and secondory school in
            2021. i started education in 
            </p>  </li>
    
  </ul>
  </div>
    
  )
}

export default About
