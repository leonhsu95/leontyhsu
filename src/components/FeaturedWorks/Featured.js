import React from 'react'
import TheColdDrip from './FeaturedWorksItems/TheColdDrip'
import LearningDelights from './FeaturedWorksItems/LearningDelights'
import Projectify from './FeaturedWorksItems/Projectify'
import SydneyContacts from './FeaturedWorksItems/SydneyContacts'
import ViewAll from './ViewAll'

const FeaturedWorks = () => {

  // if(projectData){
  //   const projects = projectData.map((project) => { 
  //     return project.title})

  //     console.log(projects);
  // }
  
  return (
    <section id="index-portfolio">
      <h2 className="desktop-wrapper mobile-wrapper">Portfolio Highlights</h2>

      <TheColdDrip />
      <Projectify />
      <SydneyContacts />
      <LearningDelights />
      <ViewAll />

    </section>

  )
}

export default FeaturedWorks
