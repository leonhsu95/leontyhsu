import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../components/Footer/Footer'
import TheColdDripContent from '../components/Portfolio/ProjectItems/TheColdDrip'

// Create a custom hook that uses both useLocation and useEffect
const useScrollToTop = () => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo({ top: 0 });
     // scroll to the top of the browser window when changing route
     // the window object is a normal DOM object and is safe to use in React.
    }, [location]);
};

const TheColdDripPage = () => {
    
    useScrollToTop();
    return (
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{ type: "spring", duration: 3 }}
        >
       <TheColdDripContent />
       <Footer/>
       </motion.div>
    )
}

export default TheColdDripPage
