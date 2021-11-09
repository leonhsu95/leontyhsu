import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
// import { Link as LinkScroll } from 'react-scroll';


export const Nav = styled.nav`
    background: white;
    height: 100px;
    // margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    top: 0;
    z-index: 10;
    font-family: 'GT Walsheim Pro';
    text-transform: uppercase;
    position: sticky;
    box-shadow: 1px 1px 5px #afa3a3;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
        position: sticky;
        height: 80px;
    }
`;

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    //height: 150px;
    z-index: 1;
    width: 100%;
    padding: 0 100px;
    //max-width: 1600px;
    align-items: center;
    

    @media screen and (max-width: 960px){
        //height: 70px;
        padding: 0 0 0 30px;
    }

`;

export const NavLogo = styled(LinkRouter)`
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    width: 150px;

    @media screen and (max-width: 960px){
        margin-left: 0px;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #5e6472;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 960px){
        display: none;
    }
`;

export const NavItem = styled.li`
    color: #5e6472;
`;

export const NavLinks = styled(LinkRouter)`
    color: #5e6472;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 1.3em;
    font-weight: bold;
    letter-spacing: 1.5px;

    &:hover{
        color: #FF9067;
        transition: ease-in-out 0.5s;
    }
    
    
`;