import React from 'react'
import { motion } from 'framer-motion';
import pd from '../../Assets/Images/projectify-desktop.png'
import pm from '../../Assets/Images/projectify-mobile.png'
import { SiJavascript, SiMysql, SiNodemon, SiHeroku, SiAdobeillustrator, SiAdobephotoshop, SiAdobexd } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaNpm, FaNodeJs } from "react-icons/fa";

const ProjectifyContent = () => {
    return (
        <section className="project-items">
            <div className="desktop-wrapper mobile-wrapper project-items-hero">
                <motion.div
                    initial={{opacity:0, translateY:"-5vh"}}
                    animate={{opacity:1, translateY:0}}
                    exit={{opacity:0}}
                    transition={{ duration: 1}}
                >
                <h1>Projectify</h1>
                <p className="tagline">Marketing CRM MVP Website</p>
                <p className="tagline-description">Projecting my Marketing background into a CRM Prototype</p>
                <p className="tagline-description">Creators: Leon Hsu (Project Lead) / Megan Skippen (Design Lead) / Peter Psiapkis</p>
                <br></br>
                </motion.div>
                <motion.div
                    initial={{opacity:0, translateX:"-5vh"}}
                    animate={{opacity:1, translateX:0}}
                    exit={{opacity:0}}
                    transition={{ duration: 1 }}
                >
                <a href="https://github.com/leonhsu95/Projectify" _blank="true"> GitHub Repository</a>
                <a href="https://projectify-marketing-app.herokuapp.com/" _blank="true">Website</a>
                </motion.div>
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container techstack-container">
                <h2 className="tech-heading">Technologies Used</h2>
                <div className="tech-stack">
                    <FaHtml5 id="html-icon" className="icons" />
                    <FaCss3Alt id="css-icon" className="icons" />
                    <SiJavascript id="js-icon" className="icons" />
                    <SiMysql id="mysql-icon" className="icons" />
                    <FaNodeJs id="node-icon" className="icons" />
                    <FaNpm id="npm-icon" className="icons" />
                    <SiNodemon id="nodemon-icon" className="icons" />                    
                    <SiHeroku id="heroku-icon" className="icons" />
                    <SiAdobeillustrator id="illustrator-icon"className="icons"/>
                    <SiAdobephotoshop id="photoshop-icon" className="icons"/>
                    <SiAdobexd id="xd-icon" className="icons"/>
                </div>
                
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Background</h2>
                <p>
                PROJECTIFY is the all-in-one marketing lead generation tool for freelance and small-to-medium business owners. The app helps owners to manage their client's in their online business, digital marketing and advertising campaigns, 'projecting' user ad clicks and call-to-action registrations on client's Landing Page, Facebook and Instagram social media platforms. The application also manages and displays performance data of each campaign by full-month periods.</p>
            </div>


            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Process</h2>
                <p>
                    This was a major group collaborative project as required for the University of Sydney Full Stack Web Certificate course.
                    Time brainstorming was short as an idea was settled on quickly.
                </p>

                <p>
                    The backend and MySQL Database architecture was developed first so that it follows the criteria of success. As project leader, I allocated tasks to my teammates' strengths and 
                    and determined when tasks are scheduled for completion. I managed the project's backend MCV structure and database CRUD methods for database functions and manipulations. Megan as the
                    Design Lead, created wireframes and prototypes for the website's UX/UI and colour schemes.

                </p>
                <p>
                    Collaboration and collation through GitHub commits were relatively hassle free and easily identifiable, as we worked in separate roles.
                    After some front-end testing to display backend data, the project was finalised.
                </p>
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Research and Inspirations</h2>
                <p>
                    The idea for this project was motivated by Megan and my career experiences in Digital Marketing and my desire for customers to hopefully make informed decisions on their campaigns
                    without having to pay a preimum to utilise adn trial this product service.
                
                </p>
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Final Design</h2>
                <div id="screenshots">
                  <img src={pd} alt="Projectify Desktop Website"></img>
                  <img src={pm} alt="Projectify Mobile Website"></img>
                </div>
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Successes</h2>
                <ul>
                    <li>Quick Idea Realisation</li>
                    <li>Well Designed UX / UI</li>
                    <li>Project completed ahead of schedule</li>
                    <li>Strong communication between teammates</li>
                </ul>

                <h2>Challenges</h2>
                <ul>
                    <li>Collaboration Error testing and checking</li>
                    <li>Displaying campaign data to front end</li>
                    <li>Increased roles and responsibility between fewer people</li>
                    <li>Difficulty understanding and implementing new technologies</li>
                </ul>
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Future Developments</h2>
                <ul>
                    <li>API to confirm user address with Australia Post Address Verification</li>
                    <li>Password reset / “Lost Your Password” link on Client Portal Login page</li>
                    <li>Dynamically display client logo in their profile pages</li>
                    <li>Auto generate invoice templates and allow clients to access their invoices</li>
                    <li>Campaign bookings through the portal after the first month.</li>
                    <li>Future payment integration to pay invoices, possibly through Stripe / EWay</li>
                    <li>CRM integration to dynamically measure Landing Page, Facebook and Instagram Ad Clicks and Call-to-Action registrations</li>
                    <li>Owner interface to edit, update and create new user privileges and projects without inserting them back-end</li>
                </ul>
            </div>
        </section>
    )
}

export default ProjectifyContent
