import React from 'react'
import { Link } from 'react-router-dom'
import hfpd from '../../Assets/Images/hillsfamilyphysio-portfolio-desktop.png'

const HFP = () => {
    return (
        <article className="index-projects mobile-wrapper">
        <h3 className="desktop-wrapper">Hills Family Physio</h3>

        <div className="project-container"> 
            
            <div className="index-project-picture">
              <img src={hfpd} alt="Hills Family Physio"></img>
            </div>

            <ul className="stack-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
              <li>MySQL</li>
              <li>Wordpress</li>

            </ul>
        </div>
        <div className="button-container desktop-wrapper">
          <p>The first step to giving a practice an online existence</p>
          <Link className="link" to="/hfp">About Project</Link>
          {/* <a href="https://github.com/leonhsu95/Projectify" _blank="true">About Project</a> */}
          
        </div>
      </article>
    )
}

export default HFP
