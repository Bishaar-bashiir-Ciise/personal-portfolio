import React from 'react'
import musawir from "../Image/bishaar.jpg"


function Bio() {
  const name = 'bishar bashiir'
  return (
    <div className="skills-container">
      <ul>
        <li>
          <img style={{
            borderRadius: '50%',
            width: '370px',
            height: '350px',
            marginTop: '10px',
            marginBottom: '10px',

          }} src={musawir}alt="HTML5" />
          <h3>Hi i'm <span className='bishar' >{name}</span></h3>
          <p> I'm a software developer who develops both front-end and back-end  and mobile app  using  different language. like flattur,js,react,html and css,boot-strap ,C#,java </p>
        </li>

      </ul>
      </div>
  )
}

export default Bio
