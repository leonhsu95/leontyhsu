import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar/Navbar';
import Sidebar from '../src/components/Sidebar'
import Home from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import AboutMePage from './pages/AboutMePage';
import TheColdDripPage from './pages/TheColdDripPage';
import ProjectifyPage from './pages/ProjectifyPage';
import SydneyContactsPage from './pages/SydneyContactsPage';
import LearningDelightsPage from './pages/LearningDelightsPage';
import ReacharityPage from './pages/ReacharityPage';
import IdoleyesPage from './pages/IdoleyesPage';
import SPVPage from './pages/SPVPage';
import HFPPage from './pages/HFPPage';
import BudgetTrackerPage from './pages/BudgetTrackerPage';
import TheTechWordPage from './pages/TheTechWorldPage';


function App() {
  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <Router>
      <header id="header">
                <Sidebar isOpen={isOpen} toggle={toggle}/>
                <Navbar toggle={toggle}/>
      </header>
      <AnimatePresence exitBeforeEnter>
        <Routes>
            <Route path="/leontyhsu" element={<Home/>} />
            <Route path="/portfolio" element={<PortfolioPage/>}/>
            <Route path="/aboutme" element={<AboutMePage/>}/>
            <Route path="/thecolddrip" element={<TheColdDripPage/>}/>
            <Route path="/projectify" element={<ProjectifyPage/>}/>
            <Route path="/sydneycontacts" element={<SydneyContactsPage/>}/>
            <Route path="/learningdelights" element={<LearningDelightsPage/>}/>
            <Route path="/reacharity" element={<ReacharityPage/>}/>
            <Route path="/idoleyes" element={<IdoleyesPage/>}/>
            <Route path="/spv" element={<SPVPage/>}/>
            <Route path="/hfp" element={<HFPPage/>}/>
            <Route path="/budgettracker" element={<BudgetTrackerPage/>}/>
            <Route path="/thetechword" element={<TheTechWordPage/>}/>

        </Routes>
        </AnimatePresence>
    </Router>
  );
}

export default App;
