import React from "react";
import first from "../Image/portfolio.png";
import second from "../Image/second websites.png";
import fouth from "../Image/gym2.jpg";
import blogs from "../Image/quiz-game.png";
import restruent from "../Image/calculator.png"



const Projects = () => {
  return (


    <div className="projects-container" >
        <div className="Skills-form">
      <ul>
        <li>
          <img src={first}alt="HTML5" />
          <h4 className="title">portfolio</h4>
          <p style={{
          marginTop: "-50px",

          }}>this is a previous project i made it.</p>
          <button className="btn-style"  >View</button>
        </li>
        </ul>
    </div>
  

        <div className="Skills-form">
      <ul>
        <li>
          <img src={restruent}alt="HTML5" />
          <h4 className="title">calculator</h4>
          <p style={{
          marginTop: "-50px",

          }}>this is a previous project i made it.</p>
          <button className="btn-style"  >View</button>
        </li>
        </ul>
    </div>
    <div className="Skills-form">
      <ul>
        <li>
          <img src={fouth}alt="HTML5" />
          <h4 className="title">gym-system</h4>
          <p style={{
          marginTop: "-50px",

          }}>this is a previous project i made it.</p>
          <button className="btn-style"  >View</button>
        </li>
        </ul>
    </div>


      <div className="Skills-form">
      <ul>
        <li>
          <img src={blogs}alt="project" />
          <h4 className="title">quiz-game</h4>
          <p style={{
          marginTop: "-50px",

          }}>this is a previous project i made it. </p>
          <button className="btn-style" >View</button>
        </li>
        </ul>
    </div>
    

    
        
      <hr />
    
    </div>
  );
        }
  
  
  
  export default Projects;