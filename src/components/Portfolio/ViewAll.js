import React from 'react'
import { Link } from 'react-router-dom'
// import PortfolioBackground from "../Assets/Images/view-portfolio-background.jpg"

const ViewAll = () => {
    return (
        <div className="view-portfolio">
            <div className="view-portfolio-content">
                <div>
                    <p>View my extended portfolio here</p>
                    <Link id="view-portfolio-link"className="link" to="/portfolio">View Portfolio</Link>
                </div>
            </div>
            
        </div>
    )
}

export default ViewAll
