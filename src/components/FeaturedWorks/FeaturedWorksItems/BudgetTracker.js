import React from 'react'
import { Link } from 'react-router-dom'
import btd from '../../Assets/Images/budgettracker-portfolio-desktop.png'

const BudgetTracker = () => {
    return (
        <article className="index-projects mobile-wrapper">
        <h3 className="desktop-wrapper">Budget Tracker</h3>

        <div className="project-container"> 
            
            <div className="index-project-picture">
              <img src={btd} alt="Budget Tracker"></img>
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
          <p>Track your budget with this simple web app.</p>
          <Link className="link" to="/budgettracker">About Project</Link>
          {/* <a href="https://github.com/leonhsu95/Projectify" _blank="true">About Project</a> */}
          <a className="link" href="https://budget-tracker-lh.herokuapp.com/" _blank="true">Website</a>
        </div>
      </article>
    )
}

export default BudgetTracker
