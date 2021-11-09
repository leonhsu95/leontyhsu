import React from 'react'
import { Link } from 'react-router-dom'
import ldd from '../../Assets/Images/learningdelights-portfolio-desktop.png'

const LearningDelights = () => {
    return (
        <article className="index-projects mobile-wrapper">
        <h3 className="desktop-wrapper">Learning Delights</h3>

        <div className="project-container"> 
            
            <div className="index-project-picture">
              <img src={ldd} alt="Learning Delights"></img>
            </div>

            <ul className="stack-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
              <li>MySQL</li>
              <li>Custom Wordpress</li>

            </ul>
        </div>
        <div className="button-container desktop-wrapper">
          <p>Refreshing one client&apos;s love for culture into a website.</p>
          <Link className="link" to="/learningdelights">About Project</Link>
          {/* <a href="https://github.com/leonhsu95/Projectify" _blank="true">About Project</a> */}
          <a className="link" href="https://learningdelights.com.au" _blank="true">Website</a>
        </div>
      </article>
    )
}

export default LearningDelights
