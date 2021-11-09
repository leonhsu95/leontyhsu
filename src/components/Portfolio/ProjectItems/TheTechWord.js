import React from 'react'
import { motion } from 'framer-motion';
import ttwd from '../../Assets/Images/thetechword-desktop.png'
import ttwm from '../../Assets/Images/thetechword-mobile.png'
import { SiJavascript, SiMysql, SiNodemon,  SiHeroku } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaNpm, FaNodeJs } from "react-icons/fa";

const TheTechWordContent = () => {
    return (
        <section className="project-items">
            <div className="desktop-wrapper mobile-wrapper project-items-hero">
                <motion.div
                    initial={{opacity:0, translateY:"-5vh"}}
                    animate={{opacity:1, translateY:0}}
                    exit={{opacity:0}}
                    transition={{ duration: 1}}
                >
                <h1>The Tech Word</h1>
                <p className="tagline">A Prototype CMS Blog Web App</p>
                <p className="tagline-description">Developing with MySQL and Heroku Cloud</p>
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
                <a href="https://github.com/leonhsu95/tech-blog" _blank="true"> GitHub Repository</a>
                <a href="https://tech-blog-lh.herokuapp.com/dashboard" _blank="true">Website</a>
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
                    <SiMysql id="mysql-icon" className="icons" />
                    <SiNodemon id="nodemon-icon" className="icons" />                    
                    <SiHeroku id="heroku-icon" className="icons" />
                </div>
                
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Background</h2>
                <p>
                This Tech Blog is a CMS style project utilising the MVC structure, routes, SQL and Handlebars templating. In this website, users can view/edit posts, leave comments login and register. Bootstrap is used as the primary CSS styling.</p>
            </div>

            
            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Final Design</h2>
                <div id="screenshots">
                  <img src={ttwd} alt="The Tech Word Desktop Website"></img>
                  <img src={ttwm} alt="The Tech Word Mobile Website"></img>
                </div>
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Successes</h2>
                <ul>
                    <li>Creating a dynamic and data storable web app</li>
                    <li>Utilised Cloud MySQL Database with Heroku</li>
                </ul>

                <h2>Challenges</h2>
                <ul>
                    <li>Understanding MySQL syntax and mongoose npm needed alot of time to grasp</li>
                    <li>Having to quickly understand new back-end coding, language and concepts</li>
                </ul>
            </div>

        </section>
    )
}

export default TheTechWordContent
