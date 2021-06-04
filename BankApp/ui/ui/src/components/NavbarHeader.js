import React from 'react'
import bank_logo from '../resources/bank_logo.png'
import { Navbar, Nav } from 'react-bootstrap'
import { Dropdown  } from 'react-bootstrap'

const NavbarHeader = () => {
    return (
        <>
            <Navbar bg="light" sticky="top" expand="md" display="flex">
                <Navbar.Brand href="/home">
                    <img src={bank_logo} alt="bank_logo.png" width="200"/>
                </Navbar.Brand> 

                    <Nav className="justify-content-center" display="flex">
                        <Nav.Link href="/preferences">Preferences</Nav.Link>
                        <Nav.Link href="/link2">Link 2</Nav.Link>
                        <Nav.Link href="link3">Link 3</Nav.Link>
                    </Nav>

                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-menu-align-left" size="sm">
                                More Deets
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>  
                               
            </Navbar>
        </>
    )
}

export default NavbarHeader;
