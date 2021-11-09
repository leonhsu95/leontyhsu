import React from 'react'
import { Link } from 'react-router-dom'
import rd from '../../Assets/Images/reacharity-portfolio-desktop.png'

const Reacharity = () => {
    return (
        <article className="index-projects mobile-wrapper">
        <h3 className="desktop-wrapper">Reacharity</h3>

        <div className="project-container"> 
            
            <div className="index-project-picture">
                <img src={rd} alt="Reacharity"></img>
            </div>

            <ul className="stack-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
              <li>WordPress</li>
              <li>WooCommerce</li>

            </ul>
        </div>
        <div className="button-container desktop-wrapper">
          <p>Helping people reach the charities they want to support.</p>
          <Link className="link" to="/reacharity">About Project</Link>
          {/* <a href="https://github.com/leonhsu95/Projectify" _blank="true">About Project</a> */}
          <a className="link" href="https://leonhsu95.github.io/ReaCharity/" _blank="true">Website</a>
        </div>
      </article>
    )
}

export default Reacharity
