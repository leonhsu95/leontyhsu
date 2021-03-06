import React from 'react'
import { Link } from 'react-router-dom'
import ttwd from '../../Assets/Images/thetechword-portfolio-desktop.png'

const TheTechWord = () => {
    return (
        <article className="index-projects mobile-wrapper">
        <h3 className="desktop-wrapper">The Tech Word</h3>

        <div className="project-container"> 
            
            <div className="index-project-picture">
              <img src={ttwd} alt="The Tech Word"></img>
            </div>

            <ul className="stack-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
              <li>NodeJs</li>
              <li>Npm</li>
              <li>MongoDb</li>
              <li>Nodemon</li>
              <li>Heroku</li>

            </ul>
        </div>
        <div className="button-container desktop-wrapper">
          <p>A Prototype CMS Blog Web App.</p>
          <Link className="link" to="/thetechword">About Project</Link>
          {/* <a href="https://github.com/leonhsu95/Projectify" _blank="true">About Project</a> */}
          <a className="link" href="https://tech-blog-lh.herokuapp.com/" _blank="true">Website</a>
        </div>
      </article>
    )
}

export default TheTechWord
