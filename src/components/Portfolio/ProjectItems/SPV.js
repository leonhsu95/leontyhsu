import React from 'react'
import { motion } from 'framer-motion';
import spv from '../../Assets/Images/sydneypropertyvaluations.png'
import { SiJavascript, SiAdobeillustrator, SiAdobephotoshop, SiWoocommerce } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaWordpress } from "react-icons/fa";

const SPVContent = () => {
    return (
        <section className="project-items">
           <div className="desktop-wrapper mobile-wrapper project-items-hero">
                <motion.div
                    initial={{opacity:0, translateY:"-5vh"}}
                    animate={{opacity:1, translateY:0}}
                    exit={{opacity:0}}
                    transition={{ duration: 1}}
                >
                <h1>Sydney Property Valuations</h1>
                <p className="tagline">Property Valuations Business Website</p>
                <p className="tagline-description">A refreshing update to an existing business website</p>
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
                {/* <button className="button-project">About Project</button> */}
                <a href="https://sydneypropertyvaluations.com.au/" _blank="true">Website</a>
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
                    The client requested a website redesign on an prexisting WordPress website as a way to increase traffic onto his website
                    by having an updated image.

                </p>
            </div>


            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Process</h2>
                <p>
                    I started with an interview with my client, where we identified that the website needed to be redesigned.
                    It was established that I must use WordPress for the website as alot of content has been made in the website already and given
                    the budget set.
                    
                </p>
                <p>
                    Interview interactions were few as most of the communications was done by email and phone call. Communication was fast and 
                    and adjustments were made instantly and was quickly approved for the website relaunch.
                </p>
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Final Design</h2>
                <div id="screenshots">
                  <img src={spv} alt="Sydney Property Valuations Desktop Website"></img>
                </div>
            </div>
        </section>
    )
}

export default SPVContent
