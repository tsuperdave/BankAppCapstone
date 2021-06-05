import React from 'react'
import bank_logo from '../resources/bank_logo.png'
import { Navbar, Nav } from 'react-bootstrap'
import { Dropdown  } from 'react-bootstrap'

const logout = () => {
    localStorage.clear();
}

const NavbarHeader = () => {
    return (
        <>
            <Navbar bg="light" sticky="top" expand="md" display="flex">
                <Navbar.Brand href="/home">
                    <img src={bank_logo} alt="bank_logo.png" width="200"/>
                </Navbar.Brand> 

                    <Nav className="justify-content-center" display="flex">
                        <Nav.Link href="/preferences">Preferences</Nav.Link>
                        <Nav.Link href="/accounts">Accounts</Nav.Link>
                        <Nav.Link href="/aboutus">About Us</Nav.Link>
                    </Nav>

                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-menu-align-left" size="sm">
                                More Deets
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="/preferences">Preferences</Dropdown.Item>
                                <Dropdown.Item href="/accounts">Accounts</Dropdown.Item>
                                <Dropdown.Item href="/" onClick={logout}>Log Out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>  
                               
            </Navbar>
        </>
    )
}

export default NavbarHeader;
