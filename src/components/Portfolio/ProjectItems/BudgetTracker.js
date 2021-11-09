import React from 'react'
import { motion } from 'framer-motion';
import btd from '../../Assets/Images/budgettracker-desktop.png'
import btm from '../../Assets/Images/budgettracker-mobile.png'
import { SiJavascript, SiMongodb, SiNodemon,  SiHeroku } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaNpm, FaNodeJs } from "react-icons/fa";

const BudgetTrackerContent = () => {
    return (
        <section className="project-items">
            <div className="desktop-wrapper mobile-wrapper project-items-hero">
                <motion.div
                    initial={{opacity:0, translateY:"-5vh"}}
                    animate={{opacity:1, translateY:0}}
                    exit={{opacity:0}}
                    transition={{ duration: 1}}
                >
                <h1>Budget Tracker</h1>
                <p className="tagline">A Prototype Budgeting Web App</p>
                <p className="tagline-description">Track your budget with this simple web app</p>
                <p className="tagline-description">Creator: Leon Hsu</p>
                <br></br>
                </motion.div>
                <motion.div
                    initial={{opacity:0, translateX:"-5vh"}}
                    animate={{opacity:1, translateX:0}}
                    exit={{opacity:0}}
                    transition={{ duration: 1 }}
                >
                {/* <p id="year" className="tagline-description">2019</p> */}
                <a href="https://github.com/leonhsu95/budget-tracker" _blank="true"> GitHub Repository</a>
                <a href="https://budget-tracker-lh.herokuapp.com/" _blank="true">Website</a>
                </motion.div>
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container techstack-container">
                <h2 className="tech-heading">Technologies Used</h2>
                <div className="tech-stack">
                    <FaHtml5 id="html-icon" className="icons" />
                    <FaCss3Alt id="css-icon" className="icons" />
                    <SiJavascript id="js-icon" className="icons" />
                    <FaNodeJs id="node-icon" className="icons" />
                    <FaNpm id="npm-icon" className="icons" />
                    <SiMongodb id="mongodb-icon" className="icons" />
                    <SiNodemon id="nodemon-icon" className="icons" />                    
                    <SiHeroku id="heroku-icon" className="icons" />
                </div>
                
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Background</h2>
                <p>
                Budget Tracker is a simple app that helps you follow your debit and credits in your account and stores them into a NoSQL Mongo Database. User transactions are graphed automatically on the Heroku Database. The website can be saved into a Progressive Web Application (PWA) as the manifest.webmanifest and service-worker.js files store the assets the make the application.
                </p>
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Final Design</h2>
                <div id="screenshots">
                  <img src={btd} alt="Budget Tracker Desktop Website"></img>
                  <img src={btm} alt="Budget Tracker Mobile Website"></img>
                </div>
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Successes</h2>
                <ul>
                    <li>Creating a dynamic and data storable web app</li>
                    <li>Utilised MongoDb</li>
                </ul>

                <h2>Challenges</h2>
                <ul>
                    <li>Understanding MongoDB syntax and mongoose npm needed alot of time to grasp</li>
                    <li>Having to quickly understand new back-end coding, language and concepts</li>
                </ul>
            </div>

        </section>
    )
}

export default BudgetTrackerContent
