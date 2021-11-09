import React from 'react'
import { Link } from 'react-router-dom';
import ppd from '../../Assets/Images/projectify-portfolio-desktop.png'

const Projectify = () => {
    return (
        <article className="index-projects mobile-wrapper">
        <h3 className="desktop-wrapper">Projectify</h3>

        <div className="project-container"> 
            
            <div className="index-project-picture">
              <img src={ppd} alt="Projectify"></img>
            </div>

            <ul className="stack-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
              <li>NodeJS</li>
              <li>Npm</li>
              <li>MySQL</li>
              <li>Heroku</li>

            </ul>
        </div>
        <div className="button-container desktop-wrapper">
          <p>Projecting my Marketing background into a CRM MVP.</p>
          {/* <button className="button-project">About Project</button>
          <button className="button-website">Website</button> */}
          <Link className="link" to="/projectify">About Project</Link>
          {/* <a href="https://github.com/leonhsu95/Projectify" _blank="true">About Project</a> */}
          <a className="link" href="https://projectify-marketing-app.herokuapp.com/" _blank="true">Website</a>
            
        </div>
      </article>
    )
}

export default Projectify
