import React, {useEffect}  from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import leonhsu95_oct2021 from '../components/Assets/Documents/leonhsu95_oct2021.pdf'
import { SiJavascript, SiMysql, SiReact, SiMongodb, SiNodemon, SiApollographql, SiGraphql, SiGithub, SiHeroku, SiAdobeillustrator, SiAdobephotoshop, SiAdobexd } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaSass, FaNpm, FaNodeJs, FaWordpress } from "react-icons/fa";
import Footer from '../components/Footer/Footer'

// Create a custom hook that uses both useLocation and useEffect
const useScrollToTop = () => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo({ top: 0 });
     // scroll to the top of the browser window when changing route
     // the window object is a normal DOM object and is safe to use in React.
    }, [location]);
  };

const AboutMePage = () => {

    useScrollToTop();
    return (
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{ type: "spring", duration: 3 }}
        >
        <section id="aboutme">
            <div id="aboutme-hero" className="desktop-wrapper mobile-wrapper">
            <motion.div 
                initial={{opacity:0, translateY:"-5vh"}}
                animate={{opacity:1, translateY:0}}
                exit={{opacity:0}}
                transition={{ duration: 1}}
            >
                <h1>Leon Hsu</h1>
                <p className="tagline">Sydney, Australia</p>
                <p className="tagline-description">Front-End MERN Web Developer</p>
            </motion.div>
            </div>.
          
            <div className="desktop-wrapper mobile-wrapper techstack-container">
                <h2>Tech Stack</h2>
                <div className="tech-stack">
                    <FaHtml5 id="html-icon" className="icons" />
                    <FaCss3Alt id="css-icon" className="icons" />
                    <FaSass id="sass-icon" className="icons" />
                    <SiJavascript id="js-icon" className="icons" />
                    <SiMysql id="mysql-icon" className="icons" />
                    <FaNodeJs id="node-icon" className="icons" />
                    <FaNpm id="npm-icon" className="icons" />
                    <SiReact id="react-icon" className="icons" />
                    <SiMongodb id="mongodb-icon" className="icons" />
                    <SiNodemon id="nodemon-icon" className="icons" />                    
                    <SiApollographql id="apollo-icon" className="icons" />
                    <SiGraphql id="graphql-icon" className="icons" />
                    <FaWordpress id="wp-icon" className="icons" />
                    <SiGithub id="gh-icon" className="icons"/>
                    <SiHeroku id="heroku-icon" className="icons" />
                    <SiAdobeillustrator id="illustrator-icon"className="icons"/>
                    <SiAdobephotoshop id="photoshop-icon" className="icons"/>
                    <SiAdobexd id="xd-icon" className="icons"/>


                </div>
                
            </div>

            <div id="aboutme-container" className="desktop-wrapper mobile-wrapper">
                <h2>About Me</h2>
                <p>
                Leon is a Front-End MERN Developer that specialises in website UX and UI Designs and also
                backend website functionalities with JavaScript, Databases, GraphQL and Express Routers. 
                </p>
                <p>
                He received the certificate in University of Sydney's Full Stack Web Development developing skills in HTML, CSS, JavaScript, MERN and MySQL to pursue web development as a full-time career. He's known as a passionate problem solver with a strong focus in design, and develop robust websites that are responsive
                for mobile and desktop.
                </p>
                <p>
                With each project, he engages the audience for an impactful UX/UI to clients and visitors, ensuring that their website requirements are fulfilled. He has created many websites as a freelance Developer for various clients, boosting their online profile with SEO, creative assets generation used for marketing and promotions and tracking business’s online sales. 
                </p>
                <p>When he's not coding, he enjoys travelling overseas, music, fitness, watching sitcoms &amp; dramas and all things coffee.</p>
            </div>

            {/* <div id="links-container" className="desktop-wrapper mobile-wrapper">
                <p>Feel free to download my CV <a href={leonhsu95_oct2021} _blank="true">here</a>.</p>
            </div> */}

             <div id="links-container" className="desktop-wrapper mobile-wrapper">
             <p>Feel free to look at my <a href="https://www.linkedin.com/in/leonhsu95/" _blank="true">LinkedIn Profile</a> to learn more about his career. </p>
            </div>


        </section>
        <Footer/>
        </motion.div>
      
    )
}

export default AboutMePage
