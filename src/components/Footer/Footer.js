import React from 'react'

const Footer = () => {
    return (
            <div id="footer" className="desktop-wrapper mobile-wrapper">
                <h2>Let's Connect</h2>
                <p>leonhsu95@gmail.com</p>
                <div className= "social-container">
                    <a className="social-button-links" href="mailto:someone@example.com"><div className="social-buttons"><i className="fas fa-envelope-square"></i></div></a>
                    <a className="social-button-links" href="https://github.com/leonhsu95"><div className="social-buttons"><i className="fab fa-github"></i></div></a>
                    <a className="social-button-links" href="https://www.linkedin.com/in/leonhsu95/"><div className="social-buttons"><i className="fab fa-linkedin"></i></div></a>
                </div>
                <p className="small">&copy;2021 Leon Hsu | All Rights Reserved</p>
            </div>
            
    )
}

export default Footer;
