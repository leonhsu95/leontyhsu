import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer/Footer'
import LearningDelightsContent from '../components/Portfolio/ProjectItems/LearningDelights'

// Create a custom hook that uses both useLocation and useEffect
const useScrollToTop = () => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo({ top: 0 });
     // scroll to the top of the browser window when changing route
     // the window object is a normal DOM object and is safe to use in React.
    }, [location]);
};

const LearningDelightsPage = () => {
    
    useScrollToTop();
    return (
        <>
       <LearningDelightsContent />
       <Footer/>
       </>
    )
}

export default LearningDelightsPage
