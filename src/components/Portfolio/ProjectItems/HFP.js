import React from 'react'
import { motion } from 'framer-motion';
import hfp from '../../Assets/Images/hillsfamilyphysio.png'
import { SiJavascript, SiAdobeillustrator, SiAdobephotoshop, SiWoocommerce } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaWordpress } from "react-icons/fa";

const HFPContent = () => {
    return (
        <section className="project-items">
            <div className="desktop-wrapper mobile-wrapper project-items-hero">
                <motion.div
                    initial={{opacity:0, translateY:"-5vh"}}
                    animate={{opacity:1, translateY:0}}
                    exit={{opacity:0}}
                    transition={{ duration: 1}}
                >
                <h1>Hills Family Physio</h1>
                <p className="tagline">Physiotherapy Business Website</p>
                <p className="tagline-description">The first step to giving a practice an online existence</p>
                <p className="tagline-description">Creator: Leon Hsu</p>
                <br></br>
                </motion.div>
                {/* <p id="year" className="tagline-description">2019</p> */}
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
                    HILLS FAMILY PHYSIO needed a website to promote their business.
                    It was my first web design job and the website just got established on WordPress.
                    The primary objective is to design the website so that it fits with their logo and branding.
                </p>
            </div>


            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Process</h2>
                <p>
                    I started with an interview with my client, where we identified that the website needed to be redesigned.
                    It was established that I must use WordPress for the website as alot of content has been made already.                  the budget set.</p>
                <p>
                    As their website was already made by the client on WordPress.com, the task was to redesign with preexisting WordPress templates.
                    The design was left to my judgment and consultation, which was later discussed and approved with the client.

                </p>
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Final Design</h2>
                <div id="screenshots">
                  <img src={hfp} alt="Hills Family Physio Website"></img>
                </div>
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Research and Inspirations</h2>
                <p>
                    Colours and themes were explored to see what suited the business logo.
                    The colour palette were inspired by what's associated with the medical fields and sciences, blue and white.
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

export default HFPContent
