import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

function Navbar() {
    return (
        <>
        <Nav>
            <Bars />
            <NavMenu>
                <NavLink to="/" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/privacy" activeStyle>
                    Privacy
                </NavLink>
                <NavLink to="/support" activeStyle>
                    Support
                </NavLink>
            </NavMenu>

            <NavBtn>
                <NavBtnLink to="/">Home</NavBtnLink>
            </NavBtn>
        </Nav>
        </>
    );
}

export default Navbar;