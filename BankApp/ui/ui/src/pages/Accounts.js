import React, { useContext, useState } from "react";
import NavbarMain from "../components/NavbarMain";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import AccountsOverview from "../components/AccountsOverview";
import Footer from "../components/Footer";
import { AuthorizationContext, requireAuth } from "../auth";
import { Row } from "react-bootstrap";


function AccountsPage(props) {

  // console.log("Accounts page loaded")

  return (
    <>
      <NavbarMain
        bg="light"
        variant="light"
        expand="md"
        logo=""
      />
      
        <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Text>Account Nickname</Card.Text>
                    <Card.Title>Account Name</Card.Title>
                    <Card.Text>Accnt #</Card.Text>
                  </Col>
                  <Col>
                    <h4>Account Balance</h4>
                    <p>
                      $$ put bal object here $$
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>          
          </Col>  
          
        </Row>
            <Col>
              <Button variant="primary" size="md">
                Delete Account
              </Button>
            </Col>

        </Container>
            
      <AccountsOverview
        bg="white"
        textColor="dark"
        size="md"
        bgImage="bg img url here"
        bgImageOpacity={1}
        title="Accounts Overview"
        subtitle=""
      />

      <Footer
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        description="A short description of what you do here"
        copyright="© 2021 Company"
        logo=""
      />
    </>
  );
}

export default requireAuth(AccountsPage);
