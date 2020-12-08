import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

import { animateScroll as scroll } from 'react-scroll';

const Navbar = (props) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNavBg = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNavBg);
    }, []);

    return (
        <React.Fragment>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='' onClick={toggleHome}>
                        ₹rupee
                    </NavLogo>
                    <MobileIcon onClick={props.toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' smooth duration={500} spy exact='true' offset={-80}>
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover' smooth duration={500} spy exact='true' offset={-80}>
                                Discover
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services' smooth duration={500} spy exact='true' offset={-80}>
                                Services
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup' smooth duration={500} spy exact='true' offset={-80}>
                                Signup
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin' smooth duration={500} spy exact='true' offset={-80}>
                            Signin
                        </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </React.Fragment>
    );
};

export default Navbar;
