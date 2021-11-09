import React from 'react'
import { motion } from 'framer-motion';
import ldd from '../../Assets/Images/learningdelights-desktop.png'
import ldm from '../../Assets/Images/learningdelights-mobile.png'
import { SiJavascript, SiAdobeillustrator, SiAdobephotoshop, SiAdobexd } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaWordpress } from "react-icons/fa";

const LearningDelightsContent = () => {
    return (
        <section className="project-items">
            <div className="desktop-wrapper mobile-wrapper project-items-hero">
            <motion.div
                    initial={{opacity:0, translateY:"-5vh"}}
                    animate={{opacity:1, translateY:0}}
                    exit={{opacity:0}}
                    transition={{ duration: 1}}
                >
                <h1>Learning Delights</h1>
                <p className="tagline">Human Culture Blog</p>
                <p className="tagline-description">Refreshing one client&apos;s love for culture into a website</p>
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
                <a href="https://learningdelights.com.au/" _blank="true">Website</a>
                </motion.div>
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container techstack-container">
                <h2 className="tech-heading">Technologies Used</h2>
                <div className="tech-stack">
                    <FaHtml5 id="html-icon" className="icons" />
                    <FaCss3Alt id="css-icon" className="icons" />
                    <SiJavascript id="js-icon" className="icons" />
                    <FaWordpress id="wp-icon" className="icons" />
                    <SiAdobeillustrator id="illustrator-icon"className="icons"/>
                    <SiAdobephotoshop id="photoshop-icon" className="icons"/>
                    <SiAdobexd id="xd-icon" className="icons"/>
                </div>
                
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Background</h2>
                <p>
                LEARNING DELIGHTS is a blogging website where one can share human and arts culture with the world.
                The owner of the Learning Delights Book Club wanted an overhaul of her outdated Blogger website which hasn't received much traffic.
                Thankfully with the attractive redesign and ease of usability, the Learning Delights has grown into an thriving community to share culture in. 
                The website is custom-made using WordPress.Org for the purpose of ease of use not only for all of the club's members.
                </p>
            </div>


            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Process</h2>
                <p>
                    I started off with an interview and discussion with the owner of Learning Delights to identify what the website should achieve that the original Blogger website could not.
                    We established that the owner wants more creative freedom in the website's design which was restricted in Blogger due to its "What you see is what you get" design templates.
                </p>
                <p>
                    Wireframes were drawn on pen and paper before I proceeded to code out the template in HTML and CSS. 
                    It was in my best judgment for the client to select a colour theme which invokes discovery and "a breath of fresh air".
                </p>
                <p>
                    I adapted to develop the website itself which a custom theme was adapted into WordPress's PHP coding architecture, implementing its functions, navigation
                    and page templates. The HTML and CSS that were created earlier are later translated to suit the coding architecture.
                </p>
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Final Design</h2>
                <div id="screenshots">
                  <img src={ldd} alt="Learning Delights Desktop Website"></img>
                  <img src={ldm} alt="Learning Delights Mobile Website"></img>
                </div>
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Research and Inspirations</h2>
                <p>
                    As my client is an avid reader of international blogs, the design was based on website styles that came from Taiwan and Japan.
                    Although to benefit the client, and with more Western design trends in mind, I proposed slight design alterations so that the website is attractive
                    and inviting rather than minimalist and conservative. The new design proposal was agreed upon as it builds on top of the initial inspirations.
                
                </p>
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Successes</h2>
                <ul>
                    <li>Smooth Communication</li>
                    <li>Adapted to creating a theme on WordPress.Org</li>
                    <li>Project completed ahead of schedule</li>
                    <li>Satisfied Customer</li>
                </ul>

                <h2>Challenges</h2>
                <ul>
                    <li>Adapting and Implenting designs into Custom WP Themes</li>
                    <li>Having to code using a new structure, rules and architecture</li>

                </ul>
            </div>

            <div className="desktop-wrapper mobile-wrapper project-items-container">
                <h2>Future Developments</h2>
                <ul>
                    <li>Dropdown Menu may be implemented so that the website can dynamically add new page features</li>
                </ul>
            </div>
        </section>
    )
}

export default LearningDelightsContent
