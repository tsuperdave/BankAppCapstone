import React, { useContext } from "react";
import NavbarMain from "../components/NavbarMain";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Footer from "../components/Footer";
import { AuthorizationContext, requireAuth } from "../auth";
import { Redirect } from "react-router-dom";

function AdminPage(props) {

  const [auth, setAuth] = useContext(AuthorizationContext);

  if(auth.role !== '[admin]') {
    return <Redirect to='/' />
  }

  return (
    <>
      <NavbarMain
        bg="light"
        variant="light"
        expand="md"
        logo=""
      />
      <Form>
        <Form.Group controlId="formId">
          <Form.Label>Email User Id</Form.Label>
          <Form.Control type="text" placeholder="Enter User ID" />
          <Button variant="primary" size="md">
            Find User By Id
          </Button>{' '}
          <Button variant="primary" size="md">
            Delete Account
          </Button>{' '}
          <Button variant="primary" size="md">
            Delete Account Holder
          </Button>
        </Form.Group>
      </Form>
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

// export default AdminPage;
// add below once auth is created 
export default requireAuth(AdminPage);
