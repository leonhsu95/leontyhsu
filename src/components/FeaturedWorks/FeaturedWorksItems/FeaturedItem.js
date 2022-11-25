import React from 'react'
import { Link } from 'react-router-dom'
import CoffeeVideo from "../../Assets/Video/coffee.mp4"

const TheColdDrip = () => {
    return (
        <article className="index-projects mobile-wrapper">
        <h3 className="desktop-wrapper">The Cold Drip</h3>

        <div className="project-container"> 
            
            <div className="index-project-picture">
              <video autoPlay loop muted>
                <source src={CoffeeVideo} ></source>
              </video>
            </div>

            <ul className="stack-list">
              <li>HTML</li>

            </ul>
        </div>
        <div className="button-container desktop-wrapper">
          <p>Turning my coffee passion into an ECommerce idea.</p>
          <Link className="link" to="/thecolddrip">About Project</Link>
          {/* <a href="https://github.com/leonhsu95/Projectify" _blank="true">About Project</a> */}
          <a className="link" href="https://the-cold-drip.herokuapp.com/" _blank="true">Website</a>
        </div>
      </article>
    )
}

export default TheColdDrip
