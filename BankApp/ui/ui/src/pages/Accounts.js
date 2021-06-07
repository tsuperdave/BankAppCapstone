import React from "react";
import NavbarMain from "./../components/NavbarMain";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import AccountsOverview from "./../components/AccountsOverview";
import Footer from "../components/Footer";

function AccountsPage(props) {
  return (
    <>
      <NavbarMain
        bg="light"
        variant="light"
        expand="md"
        logo="https://uploads.divjoy.com/logo.svg"
      />
      <section>
        <Container>
          <Col>
            <Card>
              <Card.Body>
                <Card.Text>Account Nickname</Card.Text>
                <Card.Title>Account Name</Card.Title>
                <Card.Text>Accnt #</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Container>
        <Col>
          <Button variant="primary" size="md">
            Delete Account
          </Button>
        </Col>
      </section>
      <AccountsOverview
        bg="white"
        textColor="dark"
        size="md"
        bgImage="bg img url here"
        bgImageOpacity={1}
        title="Accounts Overview"
        subtitle=""
      />
      <Card>
        <Card.Body>
          <Card.Title>Latest Transactions</Card.Title>
          <Card.Text>put txn info here</Card.Text>
        </Card.Body>
      </Card>
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

export default AccountsPage;
