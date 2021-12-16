import React from 'react'
import { Link } from 'react-router-dom'
import spvd from '../../Assets/Images/spv-portfolio-desktop.png'

const SPV = () => {
    return (
        <article className="index-projects mobile-wrapper">
        <h3 className="desktop-wrapper">Sydney Property Valuations</h3>

        <div className="project-container"> 
            
            <div className="index-project-picture">
              <img src={spvd} alt="Sydney Property Valuations"></img>
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
          <p>A refreshing update to an existing business website.</p>
          <Link className="link" to="/spv">About Project</Link>
          <a href="https://sydneypropertyvaluations.com.au/" _blank="true">Website</a>
          
        </div>
      </article>
    )
}

export default SPV
