import React from 'react'
import { motion } from 'framer-motion';
import rd from '../../Assets/Images/reacharity-desktop.png'
import rm from '../../Assets/Images/reacharity-mobile.png'
import { SiJavascript,  SiAdobeillustrator, SiAdobephotoshop, SiGithub } from "react-icons/si";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";

const ReacharityContent = () => {
    return (
        <section className="project-items">
            <div className="desktop-wrapper mobile-wrapper project-items-hero">
                <motion.div
                    initial={{opacity:0, translateY:"-5vh"}}
                    animate={{opacity:1, translateY:0}}
                    exit={{opacity:0}}
                    transition={{ duration: 1}}
                >
                <h1>Reacharity</h1>
                <p className="tagline">Charity Search Finder</p>
                <p className="tagline-description">Helping people reach the charities they want to support</p>
                <p className="tagline-description">Creators: Sam Heal (Project Lead) / Thomas Nicholson (Back End) / <br></br>Leon Hsu (Front End) / Sarah McFarland (Front End)</p>
                <br></br>
                {/* <p id="year" className="tagline-description">2021</p> */}
                </motion.div>
                <motion.div
                    initial={{opacity:0, translateX:"-5vh"}}
                    animate={{opacity:1, translateX:0}}
                    exit={{opacity:0}}
                    transition={{ duration: 1 }}
                >
                
                <a href="https://github.com/leonhsu95/ReaCharity" _blank="true"> GitHub Repository</a>
                <a href="https://leonhsu95.github.io/ReaCharity/" _blank="true">Website</a>
                </motion.div>
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container techstack-container">
                <h2 className="tech-heading">Technologies Used</h2>
                <div className="tech-stack">
                    <FaHtml5 id="html-icon" className="icons" />
                    <FaCss3Alt id="css-icon" className="icons" />
                    <SiJavascript id="js-icon" className="icons" />      
                    <SiGithub id="gh-icon" className="icons"/>
                    <SiAdobeillustrator id="illustrator-icon"className="icons"/>
                    <SiAdobephotoshop id="photoshop-icon" className="icons"/>
                </div>
                
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Background</h2>
                <p>
                    REACHARITY is a web app with the intention to help people search, 'reach' the charities they want to support.
                    Sam Heal wanted to develop this project as it he has an invested interest in volunteering wor, particularly for various charities.
                </p>
            </div>


            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Process</h2>
                <p>
                    This was a major group collaborative project as required for the University of Sydney Full Stack Web Certificate course.
                    As this was project was delievered early on in the course, it showcases our newfound skills in web development.
                </p>

                <p>
                    As suggested, the team was directed into front and back end teams, as to what's suitable to their skills.
                    Commits were checked via pull requests to which Sam or Thomas big checked potential errors.

                </p>
                <p>
                    The development was achieved as per scheduled time in simultaneous stages to make collation efficient and to speed up development process.
                </p>
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Research and Inspirations</h2>
                <p>
                    It was hard to find other examples other than the Official ACNC Charity Register.
                    After some investigation, we find that the API for the Official ACNC Charity Register is usable for 
                    testing and development without limits.
                </p>
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Final Design</h2>
                <div id="screenshots">
                  <img src={rd} alt="Reacharity Desktop Website"></img>
                  <img src={rm} alt="Reacharity Mobile Website"></img>
                </div>
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Successes</h2>
                <ul>
                    <li>We all learned new skills during development</li>
                    <li>Funtionally, the web app works better than intended</li>
                    <li>Great teamwork</li>
                    <li>Integrated Google Maps to their addresses via lat/long coordinates</li>
                </ul>

                <h2>Challenges</h2>
                <ul>
                    <li>Collaboration Error testing and checking was time consuming but necessary</li>
                    <li>Coding was unfamiliar and had a large learning curve</li>

                </ul>
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Future Developments</h2>
                <ul>
                    <li>API to confirm user address with Australia Post Address Verification</li>
                    <li>Implement more search variables</li>
                    <li>Using Mapbox or Google Maps to intiate GPS when searching address automatically</li>
                </ul>
            </div>
        </section>
    )
}

export default ReacharityContent
