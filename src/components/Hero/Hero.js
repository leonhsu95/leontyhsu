import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <div id="hero" className="desktop-wrapper mobile-wrapper">
            <motion.div
                initial={{opacity:0, translateY:"-5vh"}}
                animate={{opacity:1, translateY:0}}
                exit={{opacity:0}}
                transition={{ duration: 1}}
            >
            <p className="desktop"><span>Reimagining</span> the now <br></br>for the Creative <span>future</span></p>
            <p className="mobile"><span>Reimagining</span> the now for the Creative <span>future</span></p>
            </motion.div>
            <motion.div
                initial={{opacity:0, translateX:"-5vh"}}
                    animate={{opacity:1, translateX:0}}
                    exit={{opacity:0}}
                    transition={{ duration: 1, delay: 1 }}
            >
            <h1>Leon Hsu <br></br> Front-End Web Developer</h1>
            </motion.div>
            
        </div>
    )
}

export default Hero
