import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import TheColdDrip from '../FeaturedWorks/FeaturedWorksItems/TheColdDrip'
import Projectify from '../FeaturedWorks/FeaturedWorksItems/Projectify'
import SydneyContacts from '../FeaturedWorks/FeaturedWorksItems/SydneyContacts'
import LearningDelights from '../FeaturedWorks/FeaturedWorksItems/LearningDelights'
import Reacharity from '../FeaturedWorks/FeaturedWorksItems/Reacharity'
import BudgetTracker from '../FeaturedWorks/FeaturedWorksItems/BudgetTracker'
import HFP from '../FeaturedWorks/FeaturedWorksItems/HFP'
import Idoleyes from '../FeaturedWorks/FeaturedWorksItems/Idoleyes'
import SPV from '../FeaturedWorks/FeaturedWorksItems/SPV'
import TheTechWord from '../FeaturedWorks/FeaturedWorksItems/TheTechWord'

import CoffeeVideo from "../Assets/Video/coffee.mp4"
import ProjectifyPicture from '../Assets/Images/projectify-portfolio-desktop.png'
import ReacharityPicture from '../Assets/Images/reacharity-portfolio-desktop.png'
import TheTechWordPicture from '../Assets/Images/thetechword-portfolio-desktop.png'
import BudgetTrackerPicture from '../Assets/Images/budgettracker-portfolio-desktop.png'
import SydneyContactsPicture from '../Assets/Images/sydneycontacts-portfolio-desktop.png'
import SPVPicture from '../Assets/Images/spv-portfolio-desktop.png'
import HFPPicture from '../Assets/Images/hillsfamilyphysio-portfolio-desktop.png'
import IdoleyesPicture from '../Assets/Images/idoleyes-portfolio-desktop.png'
import LearningDelightsPicture from '../Assets/Images/learningdelights-portfolio-desktop.png'
// import projectData from '../Data/ProjectData'

const Portfolio = () => {

  // if(projectData){
  //   const projects = projectData.map((project) => { 
  //     return project.title})

  //     console.log(projects);
  // }
  
  return (
    <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{ type: "spring", duration: 3 }}
    >
    <section id="portfolio" className="desktop-wrapper mobile-wrapper">
    <motion.div
                    initial={{opacity:0, translateY:"-5vh"}}
                    animate={{opacity:1, translateY:0}}
                    exit={{opacity:0}}
                    transition={{ duration: 1}}
    >
      <h1>Portfolio</h1>
            <p className="tagline">A history of my works</p>
            <p className="tagline-description">Each project is a snapshot of my continual progress and growth</p>
            {/* <p className="tagline-description">Scroll down to continue</p> */}
    </motion.div>
    </section>
    <main>
    <section className="portfolio-gallery desktop-wrapper desktop">
        <div className="gallery-container">
              <Link className="box1" to="/thecolddrip">
              <motion.div 
                  whileHover={{
                      scale: 1.05
                  }}
                  whileTap={{
                      scale: 1
                  }}
              >
                <video autoPlay loop muted>
                <source src={CoffeeVideo} ></source>
                </video>
              </motion.div>
              </Link>
              <Link className="box2" to="/projectify">
              <motion.div 
                  whileHover={{
                      scale: 1.05
                  }}
                  whileTap={{
                      scale: 1
                  }}
              ><img src={ProjectifyPicture} alt="Projectify"></img></motion.div>
              </Link>
              <Link className="box3" to="/reacharity">
              <motion.div 
                  whileHover={{
                      scale: 1.05
                  }}
                  whileTap={{
                      scale: 1
                  }}
              ><img src={ReacharityPicture} alt="Reacharity"></img></motion.div>
              </Link>
              <Link className="box4" to="/budgettracker">
              <motion.div 
                  whileHover={{
                      scale: 1.05
                  }}
                  whileTap={{
                      scale: 1
                  }}
              ><img src={BudgetTrackerPicture} alt="Budget Tracker"></img></motion.div>
              </Link>
              <Link className="box5" to="/thetechword">
                <motion.div 
                  whileHover={{
                      scale: 1.05
                  }}
                  whileTap={{
                      scale: 1
                  }}
              ><img src={TheTechWordPicture} alt="The Tech Word"></img></motion.div>
              </Link>
              <Link className="box6" to="/spv">
                <motion.div 
                  whileHover={{
                      scale: 1.05
                  }}
                  whileTap={{
                      scale: 1
                  }}
              ><img src={SPVPicture} alt="Sydney Property Valuations"></img></motion.div>
              </Link>
              <Link className="box10" to="/idoleyes">
                <motion.div 
                  whileHover={{
                      scale: 1.05
                  }}
                  whileTap={{
                      scale: 1
                  }}
              ><img src={IdoleyesPicture} alt="Idoleyes Australia"></img></motion.div>
              </Link>
              <Link className="box8" to="/idoleyes">
                <motion.div 
                  whileHover={{
                      scale: 1.05
                  }}
                  whileTap={{
                      scale: 1
                  }}
              ><img src={LearningDelightsPicture} alt="Learning Delights"></img></motion.div>
              </Link>
              <Link className="box9" to="/hfp">
                <motion.div 
                  whileHover={{
                      scale: 1.05
                  }}
                  whileTap={{
                      scale: 1
                  }}
              ><img src={HFPPicture} alt="Hills Family Physio"></img></motion.div>
              </Link>
              <Link className="box7" to="/sydneycontacts">
                <motion.div 
                  whileHover={{
                      scale: 1.05
                  }}
                  whileTap={{
                      scale: 1
                  }}
              ><img src={SydneyContactsPicture} alt="Sydney Contacts"></img></motion.div>
              </Link>

        </div>
    </section>
    <section className="portfolio-gallery mobile-wrapper mobile">
        <div className="gallery-container">
              <div className="box1"><TheColdDrip/></div>
              <div className="box2"><Projectify/></div>
              <div className="box3"><SydneyContacts/></div>
              <div className="box4"><LearningDelights/></div>
              <div className="box5"><Reacharity/></div>
              <div className="box6"><BudgetTracker/></div>
              <div className="box7"><TheTechWord/></div>
              <div className="box8"><SPV/></div>
              <div className="box9"><Idoleyes/></div>
              <div className="box10"><HFP/></div>

        </div>
    </section>
    </main>
    </motion.div>

  )
}

export default Portfolio
