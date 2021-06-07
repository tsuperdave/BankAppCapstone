import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
// import { useAuth } from "./../auth"

export default function NavbarMain(props) {
  // const auth = useAuth();

  return (
    <Navbar bg={props.bg} variant={props.variant} expand={props.expand}>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              className="d-inline-block align-top"
              src={props.logo}
              alt="Logo"
              height="30"
            />
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="mr-auto">
            <LinkContainer to="/aboutus">
              <Nav.Link active={false}>About</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/preferences">
              <Nav.Link active={false}>Preferences</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/accounts">
              <Nav.Link active={false}>Account Page</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/admin">
              <Nav.Link active={false}>Administration</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav className="mr-1">
            {/* {auth.user && ( */}
              <NavDropdown id="dropdown" title="Account" alignRight={true}>
                <LinkContainer to="/preferences">
                  <NavDropdown.Item active={false}>Preferences</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/accounts">
                  <NavDropdown.Item active={false}>Accounts</NavDropdown.Item>
                </LinkContainer>

                <Dropdown.Divider />

                <LinkContainer to="/auth/signout">
                  <NavDropdown.Item
                    active={false}
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   auth.signout();
                    // }}
                  ></NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            {/* )} */}

            {/* {!auth.user && ( */}
              <LinkContainer to="/auth/signin">
                <Nav.Link active={false}>Sign in</Nav.Link>
              </LinkContainer>
            {/* )} */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
