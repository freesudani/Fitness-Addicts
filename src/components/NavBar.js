import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { FaBars } from 'react-icons/fa'
import logo from '../images/60d47e99bf5749c4999ed305f02502c5.png';

const Nav = styled.nav`
 height: 110px;
 display: flex;
 justify-content: space-between;
 padding: 1rem 2rem;
 z-index: 100;
 position: fixed;
 width: 100%;
 background: linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.9) 100%);
`;

const NavLink = css`
 color: #fff;
 display: flex;
 align-item: center;
 padding: 0 1rem;
 height: 100%
 cursor: pointer;
 text-decoration: none;
`

const Logo = styled(Link)`
 ${NavLink}
 font-style: italic;

 img {
   width: 8rem;
   height: 8rem;
   position: absolute;
   transform: translateY(-1.4rem);
 }
`;

const MenuBars = styled(FaBars)`
 display: none;
 

 @media screen and (max-width: 768px) {
  display: block;
  color: #000d1a;
  cursor: pointer;
  height: 40px;
  width: 40px;
  background-size: contain;
  position: absolute;
  top: 25;
  right: 0;
  transform: translate(-50%, 25%);

}
`;


const NavMenu = styled.div`
 display: flex;
 align-items: center;
 margin-right: -40px;
 margin-top: 5px;

 @media screen and (max-width: 768px) {
   display: none;
 }
`;

const NavMenuLinks = styled(Link)`
 ${NavLink}
`;

const NavBtn = styled.div`
 display: flex;
 align-items: center;
 margin-right: 24px;
 margin-top: 5px;

 @media screen and (max-width: 768px) {
  display: none;
}
`;


function NavBar({ toggle }) {
    return (
        <Nav>
            <Logo to='/'><img src={logo} alt='logo' /></Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
              {menuData.map((item, index) => (
                  <NavMenuLinks to={item.link} key={index}>
                    {item.title}
                  </NavMenuLinks>
              ))};
            </NavMenu>
            <NavBtn>
              <Button to="/contact" primary='true'>Contact Us</Button>
            </NavBtn>
        </Nav>
    );
};

export default NavBar;
