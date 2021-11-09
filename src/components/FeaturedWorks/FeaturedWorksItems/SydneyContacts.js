import React from 'react'
import { Link } from 'react-router-dom'
import scd from '../../Assets/Images/sydneycontacts-portfolio-desktop.png'

const SydneyContacts = () => {
    return (
        <article className="index-projects mobile-wrapper">
        <h3 className="desktop-wrapper">Sydney Contacts</h3>

        <div className="project-container"> 
            
            <div className="index-project-picture">
                <img src={scd} alt="Sydney Contacts"></img>
            </div>

            <ul className="stack-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
              <li>Custom WordPress</li>
              <li>WooCommerce</li>

            </ul>
        </div>
        <div className="button-container desktop-wrapper">
          <p>Expanding an Optomotry Business to sell contact lenses online.</p>
          <Link className="link" to="/sydneycontacts">About Project</Link>
          {/* <a href="https://github.com/leonhsu95/Projectify" _blank="true">About Project</a> */}
          <a className="link" href="https://sydneycontacts.com.au" _blank="true">Website</a>
        </div>
      </article>
    )
}

export default SydneyContacts
