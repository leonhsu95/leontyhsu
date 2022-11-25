import React from 'react'
import { motion } from 'framer-motion';
import scd from '../../Assets/Images/sydneycontacts-desktop.png'
import scm from '../../Assets/Images/sydneycontacts-mobile.png'
import { SiJavascript, SiAdobeillustrator, SiAdobephotoshop, SiAdobexd, SiWoocommerce } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaWordpress } from "react-icons/fa";

const SydneyContactsContent = () => {
    return (
        <section className="project-items">
            <div className="desktop-wrapper mobile-wrapper project-items-hero">
                <motion.div
                    initial={{opacity:0, translateY:"-5vh"}}
                    animate={{opacity:1, translateY:0}}
                    exit={{opacity:0}}
                    transition={{ duration: 1}}
                >
                <h1>Sydney Contacts</h1>
                <p className="tagline">Contact Lenses ECommerce Shopfront</p>
                <p className="tagline-description">Expanding an Optomotry Business to sell contact lenses online</p>
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
                <a href="https://sydneycontacts.com.au" _blank="true">Website</a>
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
                    <SiAdobexd id="xd-icon" className="icons"/>
                </div>
                
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Background</h2>
                <p>
                SYDNEY CONTACTS is an online ECommerce Website that sells a variety of contact lenses. Initially the business group did not have an online presence or a shopfront that sells optometry products
                as their core business is in optometry services.</p>
            </div>


            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Process</h2>
                <p>
                  I started with an interview with my clients, who were also business partners. From the get-go, they already has website designs, functionalities and layouts
                  in mind when they proposed their idea to me. Biweekly shareholder meetings were held so that the website's requirements, criteria for successes and wireframes
                  were brainstormed, discussed and approved before proceeding with each development step.
                </p>

                <p>
                    Wireframes were drafted on paper before creating the HTML and CSS.
                    Every page required were presented in their coded unstyled form so that the business partners can get ideas and impressions and also
                    confirm that the state of the project satisfies requirements.
                </p>
                <p>
                    After approval, I created a custom WordPress theme and implemented core pages and backend functionalities.
                    I also tested if page and post templates worked and displyed in the Front End before translating the HTML and CSS to PHP.
                </p>
                <p>
                    Finally, I implemented WooCommerce to customise their products and its contact lens prescription variationsso that customers
                    can order their desired their prescription contact lens. Rigourous testing of product and order descriptions were working properly and also displayed in 
                    the user's order form after checkout. Creative Assets were designed and also approved, where it was used in the website's launch.
                </p>
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Research and Inspirations</h2>
                <p>
                    To properly understand how customer's bought contact lenses and how the business sells their products, not only did I asked detailed questions
                    on how the industry worked with the business owners, I also researched on existing competitors on how the ordering process worked.
                </p>
                <p>
                    Furthermore, studying competitor websites allowed a better understanding of consumer behaviour when using the websitem which I utilised
                    in their website designs as well.
                </p>
            </div>

               <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Final Design</h2>
                <div id="screenshots">
                  <img src={scd} alt="Sydney COntacts Desktop Website"></img>
                  <img src={scm} alt="Sydney COntacts Mobile Website"></img>
                </div>
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Successes</h2>
                <ul>
                    <li>Developing a custom ordering solutions for prescription contact lenses</li>
                    <li>The project, on my development end, was always on schedule</li>
                    <li>Project completed ahead of schedule</li>
                </ul>

                <h2>Challenges</h2>
                <ul>
                    <li>Even with external consultation with others in WordPress development, not many can give meaningful advice to designing contact lens websites</li>
                    <li>There was no similar solutions to custom ordering for contact lenses</li>
                    <li>Having to create an Simple UX/UI so that the business's staff can use it freely</li>

                </ul>
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Future Developments</h2>
                <ul>
                    <li>Repeat order button that can bring the customer's last ordered item in their cart</li>
                    <li>Website Design and UI updates</li>
                </ul>
            </div>
        </section>
    )
}

export default SydneyContactsContent
