import React from 'react'
import { Link } from 'react-router-dom'
import ied from '../../Assets/Images/idoleyes-portfolio-desktop.png'

const Idoleyes = () => {
    return (
        <article className="index-projects mobile-wrapper">
        <h3 className="desktop-wrapper">Idol Eyes Australia</h3>

        <div className="project-container"> 
            
            <div className="index-project-picture">
              <img src={ied} alt="Hills Family Physio"></img>
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
          <p>Opening an online shopfront to sell children's sunglasses</p>
          <Link className="link" to="/idoleyes">About Project</Link>
          <a href="https://idoleyes.com.au/" _blank="true">Website</a>
          
        </div>
      </article>
    )
}

export default Idoleyes
