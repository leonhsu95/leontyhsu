import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: #121212;
    display: grid;
    align-items: center;
    left: 0;
    transition: 0.5s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2.3rem;
    cursor: pointer;
    outline: none;
`;

export const CloseIcon = styled(FaTimes)`
    color white;
    positon: fixed;
    right: 10px;

    &:hover{
        transition: 0.3s ease-in-out;
        transform: rotate(180deg);
    }
    
`;

export const SidebarWrapper = styled.div`
    color: #fff;
    width: 100%;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat( 3, 90px);
    text-align: center;
    align-content: center;
    justify-content: center;
    padding: 0;
    position: relative;
    bottom: 5rem;

    @media screen and (max-width: 960px){
        //grid-template-rows: repeat(3, 60px);
    }
`

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: white;
    cursor: pointer;
    font-weight: bold;
    font-family: 'GT Walsheim Pro';
    font-size: 2em;

    &:hover{
        transition: 0.2s ease-in-out;
        background-color: #ff9067;
    }
`;

