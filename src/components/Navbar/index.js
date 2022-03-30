import React from 'react'
//import { NavLink } from 'react-router-dom'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <h1>LOGO</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/profile/:name' >
                        Profile
                    </NavLink>
                    <NavLink to='/contact-us' >
                        Contact
                    </NavLink>
                    <NavLink to='/about-me' >
                        About Me
                    </NavLink>
                    <NavLink to='/sing-up' >
                        Sing Up
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Signin In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar