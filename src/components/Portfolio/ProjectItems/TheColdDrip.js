import React from 'react'
import { motion } from 'framer-motion';
import tcdd from '../../Assets/Images/thecolddrip-desktop.png'
import tcdm from '../../Assets/Images/thecolddrip-mobile.png'
import { SiJavascript, SiReact, SiMongodb, SiNodemon, SiApollographql, SiGraphql, SiHeroku, SiAdobeillustrator, SiAdobephotoshop, SiAdobexd } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaSass, FaNpm, FaNodeJs } from "react-icons/fa";

const TheColdDripContent = () => {
    return (
        <section className="project-items">
            <div id="thecolddrip-hero" className="desktop-wrapper mobile-wrapper project-items-hero">
                <motion.div
                    initial={{opacity:0, translateY:"-5vh"}}
                    animate={{opacity:1, translateY:0}}
                    exit={{opacity:0}}
                    transition={{ duration: 1}}
                >
                <h1>The Cold Drip</h1>
                <p className="tagline">Coffee ECommerce Website</p>
                
                <p className="tagline-description">Turning my Coffee Passion into an ECommerce Idea</p>
                <p className="tagline-description">Creator: Leon Hsu</p>
                <br></br>
                {/* <p id="year" className="tagline-description">2021</p> */}
                </motion.div>
                
                {/* Map button links to control children individually */}
                <motion.div
                    initial={{opacity:0, translateX:"-5vh"}}
                    animate={{opacity:1, translateX:0}}
                    exit={{opacity:0}}
                    transition={{ duration: 1 }}
                >
                <a href="https://github.com/leonhsu95/the-cold-drip" _blank="true"> GitHub Repository</a>
                {/* <a href="https://the-cold-drip.herokuapp.com/" _blank="true">Website</a> */}
                </motion.div>
                
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container techstack-container">
                <h2 className="tech-heading">Technologies Used</h2>
                <div className="tech-stack">
                    <FaHtml5 id="html-icon" className="icons" />
                    <FaCss3Alt id="css-icon" className="icons" />
                    <FaSass id="sass-icon" className="icons" />
                    <SiJavascript id="js-icon" className="icons" />
                    <FaNodeJs id="node-icon" className="icons" />
                    <FaNpm id="npm-icon" className="icons" />
                    <SiReact id="react-icon" className="icons" />
                    <SiMongodb id="mongodb-icon" className="icons" />
                    <SiNodemon id="nodemon-icon" className="icons" />                    
                    <SiApollographql id="apollo-icon" className="icons" />
                    <SiGraphql id="graphql-icon" className="icons" />
                    <SiHeroku id="heroku-icon" className="icons" />
                    <SiAdobeillustrator id="illustrator-icon"className="icons"/>
                    <SiAdobephotoshop id="photoshop-icon" className="icons"/>
                    <SiAdobexd id="xd-icon" className="icons"/>
                </div>
                
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Background</h2>
                <p>
                THE COLD DRIP is a Coffee ECommerce MERN Website that is the platform 
                to sell all things coffee from bean varieties, blends and supplies. Consumers 
                can use this platform as the all-in-one place to purchase what they need to 
                achieve making the perfect cup of coffee or even start up their own café.
                The website also aims to be a coffee hub, giving visitors access to resources to learn more about coffee and inform them about sales and discounts.
                </p>
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Process</h2>
                <p>The project was made as a demonstration of my accumulative knowledge of React into a website. I started with creating a design prototype using Adobe XD. In using the application, I mocked with general wireframes to establish a base layout so that the website structure doesn't deviate as I consider colour schemes and design ideas.\n Once I coded out the website structure as template componenets in React, I worked on the backend functionalities so that I can establish a connection, server and database using Express and MongoDB amongst many other technologies. Furthermore I used Apollo Server and GraphQL to test manipulate database information so that new coffee items and users can be added. \n With core functionalities are working, I tested the backend stored data can be displayed in the front end before I proceeding with UX/UI.</p>
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Final Design</h2>
                <div id="screenshots">
                  <img src={tcdd} alt="The Cold Drip Desktop Website"></img>
                  <img src={tcdm} alt="The Cold Drip Mobile Website"></img>
                </div>
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Research and Inspirations</h2>
                <p>
                    The idea for this project was motivated by my love for coffee and wanting to make practical websites, notably for ECommerce.
                    In researching competitors, many of them use WordPress WooCommerce but mainly Shopify platforms, to which I based my basic
                    website UX and UI and some functionalities as it's developed with React.
                    Many other designs were inspired from the hero and home pages of various websites and implementing a free stock video will attract users to the website.
                
                </p>
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Reflections</h2>
                <h3>Successes</h3>
                <ul>
                    <li>Learning and Understanding GraphQL and React</li>
                    <li>Well Designed UX / UI</li>
                    <li>Overcame coding challenges</li>
                </ul>

                <h3>Challenges</h3>
                <ul>
                    <li>Backend Development doesn't come naturally</li>
                    <li>Design and Front End Setup took longer than scheduled time</li>
                </ul>
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Future Developments</h2>
                <ul>
                    <li>Make “Add Products” a feature that user admins can only use</li>
                    <li>Image uploading to bucket like AWS, Cloudinary with “Add Products” feature</li>
                    <li>Edit Products</li>
                    <li>Page Pagination</li>
                    <li>Search function to find specific products</li>
                    <li>User reviews</li>
                    <li>Add Shipping and Delivery information</li>
                </ul>
            </div>
        </section>
    )
}

export default TheColdDripContent
