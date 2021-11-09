import React from 'react'
import { motion } from 'framer-motion';
import ied from '../../Assets/Images/idoleyes-desktop.png'
import iem from '../../Assets/Images/idoleyes-mobile.png'
import { SiJavascript, SiAdobeillustrator, SiAdobephotoshop, SiWoocommerce } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaWordpress } from "react-icons/fa";

const IdoleyesContent = () => {
    return (
        <section className="project-items">
            <div className="desktop-wrapper mobile-wrapper project-items-hero">
                <motion.div
                    initial={{opacity:0, translateY:"-5vh"}}
                    animate={{opacity:1, translateY:0}}
                    exit={{opacity:0}}
                    transition={{ duration: 1}}
                >
                <h1>Idoleyes Australia</h1>
                <p className="tagline">Children's Sunglasses ECommerce Shopfront</p>
                <p className="tagline-description">Opening an online shopfront to sell children's sunglasses</p>
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
                <a href="https://idoleyes.com.au/" _blank="true">Website</a>
                </motion.div>
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container techstack-container">
                <h2 className="tech-heading">Technologies Used</h2>
                <div className="tech-stack">
                    <FaHtml5 id="html-icon" className="icons" />
                    <FaCss3Alt id="css-icon" className="icons" />
                    <SiJavascript id="js-icon" className="icons" />
                    <FaWordpress id="wp-icon" className="icons" />
                    <SiWoocommerce id="wc-icon"className="icons"/>
                    <SiAdobeillustrator id="illustrator-icon"className="icons"/>
                    <SiAdobephotoshop id="photoshop-icon" className="icons"/>
                </div>
                
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Background</h2>
                <p>
                    IDOLEYES AUSTRALIA is an online ECommerce Website that sells a variety of children sunglasses.
                    The request came when I just started touching web design, and as an opportunity to grow, I accepted the challenge
                    and learning experience. The website was previously was a 90s website, which was blast from the past!
                </p>
            </div>


            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Process</h2>
                <p>
                    I started with an interview with my client, where we identified the primary function of the website, selling products and flexibility
                    to create content without requiring much coding experience. The website needed to be completed in week's timeframe.
                    
                </p>
                <p>
                    As their website was already made by the client on WordPress.com, the task was to redesign with preexisting WordPress templates.
                    The design was left to my judgment and consultation, which was later discussed and approved with the client.

                </p>
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Final Design</h2>
                <div id="screenshots">
                  <img src={ied} alt="The Cold Drip Desktop Website"></img>
                  <img src={iem} alt="The Cold Drip Mobile Website"></img>
                </div>
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Research and Inspirations</h2>
                <p>
                    While there wasn't many businesses that sell exclsuively kids sunglasses, inspirations came from various
                    glasses and spectacle shops.
                </p>

            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Successes</h2>
                <ul>
                    <li>Starting off at the time, the project was a success</li>
                    <li>Smooth communication</li>
                    <li>Learnt how to use WordPress</li>
                </ul>

                <h2>Challenges</h2>
                <ul>
                    <li>Limitations on design and creatvity as I can only use WordPress Template themes</li>
                    <li>Steep and fast learning curve</li>
                </ul>
            </div>

        </section>
    )
}

export default IdoleyesContent
