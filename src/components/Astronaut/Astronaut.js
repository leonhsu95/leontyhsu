import React from 'react'
import AstronautVideo from "../Assets/Video/tunnel.mp4";

const Astronaut = () => {
    return (
        <div id="astronaut">
            <div className="video-container">
                <video autoPlay loop muted>
                    <source src={AstronautVideo}></source>
                </video>
            </div>
            <div id="blurb" className="desktop-wrapper mobile-wrapper">
                <p className="mobile">Front-End Web Developer leveraged with Sales and Marketing Backgrounds to create professional websites expanding businesses into new advertising and ECommerce horizons.</p>
                <p className="desktop">Front-End Web Developer leveraged with Sales and Marketing Backgrounds <br></br> to create professional websites expanding businesses into <br></br>new advertising and ECommerce horizons.</p>
            </div>

        </div>
    )
}

export default Astronaut
