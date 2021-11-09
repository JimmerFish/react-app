import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer >
                    <NavLogo to='/'>
                        FishinMission
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="inventory">Inventory</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
                <NavBtn >
                    <NavBtnLink to="/mint">Mint</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar
