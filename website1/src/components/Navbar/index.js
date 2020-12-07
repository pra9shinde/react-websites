import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = (props) => {
    return (
        <React.Fragment>
            <Nav>
                <NavbarContainer>
                    <NavLogo to=''>rupee</NavLogo>
                    <MobileIcon onClick={props.toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' onClick={props.toggle}>
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover' onClick={props.toggle}>
                                Discover
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services' onClick={props.toggle}>
                                Services
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup' onClick={props.toggle}>
                                Signup
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Signin</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </React.Fragment>
    );
};

export default Navbar;
