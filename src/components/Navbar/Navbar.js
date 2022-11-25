import React from 'react';
import LeonLogo from "../Assets/Images/leonhsulogo.png"
import { FaBars } from 'react-icons/fa';
import { Nav, NavLogo, NavBarContainer, MobileIcon, NavMenu, NavItem, NavLinks } from './NavBarElements';


const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavBarContainer>
                    <NavLogo id="logo" to='/leontyhsu'><img id="logo-design" src={LeonLogo} alt="Leon Hsu"></img></NavLogo>
                    {/* <div id="logo">
                        <h2><a href="/"><img id="logo-design" src="assets/designs/leonhsulogo.png" alt="Leon Hsu Logo"></img></a></h2>
                    </div> */}
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        {/* <NavItem>
                            <NavLinks to="/">Home</NavLinks>
                        </NavItem> */}
                        <NavItem>
                            <NavLinks to="/portfolio">Portfolio</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/aboutme">About Me</NavLinks>
                        </NavItem>
                        
                    </NavMenu>
                </NavBarContainer>

            </Nav>
        
        </>
    )
}

export default Navbar;
