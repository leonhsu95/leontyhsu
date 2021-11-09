import React from 'react'
// import projectData from '../Data/ProjectData'

export default function Projects(props) {

    // if(projectData){
    //     projects = projectData.map(projects => {
            
      return (
        <article className="index-projects mobile-wrapper">
        <h3 className="desktop-wrapper">The Cold Drip</h3>

        <div className="project-container"> 
            
            <div className="index-project-picture">
              <video autoPlay loop muted>
                {/* <source src={CoffeeVideo} ></source> */}
              </video>
            </div>

            <ul className="stack-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
              <li>React</li>
              <li>NodeJS</li>
              <li>Express</li>
              <li>GraphQL</li>
              <li>MongoDB</li>
              <li>Stripe</li>

            </ul>
        </div>
        <div className="button-container desktop-wrapper">
          <p>Turning my coffee passion into an ECommerce idea.</p>
          <button className="button-project">About Project</button>
          <button className="button-website">Website</button>
        </div>
      </article>
    )

}