import React from 'react'
import { SidebarContainer, Icon, CloseIcon } from './SidebarElements';
import { SidebarWrapper, SidebarLink, SidebarMenu } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
                <CloseIcon />  
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/" onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to="/aboutme" onClick={toggle}>
                        About Me
                    </SidebarLink>
                    <SidebarLink to="/portfolio" onClick={toggle}>
                        Portfolio
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
