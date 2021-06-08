import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useAuth } from "../auth.js";
import Container from "react-bootstrap/esm/Container";
import { useHistory } from "react-router";

export default function SigninForm({ props }) {
  const auth = useAuth();

  const [token, setToken] = useState('');
  const [usernameOrEmail, setUsername] = useState('');
  const [password, setPassword] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [firstName, setFirstName] = useState(''); 
  const [lastName, setLastName] = useState(''); 

  const history = useHistory();

  const goBack = () => {
    history.goBack()
  }

  const handleSubmit = async e => {
    e.preventDefault();

    const token = auth.token()
    // reroute to admin page
   
  };

  async function signup(credentials) {
    console.log("SIGN UP");
    return fetch("http://localhost:8080/api/auth/registerUser", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }
  
  return (

    <Container>
      <Form onSubmit={handleSubmit}> 
        
          <Form.Group controlId="formUsernameOrEmail">
            <Form.Control
              size="lg"
              name="usernameOrEmail"
              type="text"
              placeholder="Enter Username"
              onChange={e => setUsername(e.target.value)}
           
            />
          </Form.Group>
        
          <Form.Group controlId="formPassword">
            <Form.Control
              size="lg"
              name="password"
              type="password"
              placeholder="Password" 
              onChange={e => setPassword(e.target.value)}    
            />
          </Form.Group>

        <Button
          variant="primary"
          block={true}
          size="lg"
          type="submit"
          >
          Sign in
        </Button>
         
      </Form>

      <Button onClick={goBack}
          variant="primary"
          block={true}
          size="lg"
          type="secondary"
          >
          Go Back
      </Button>

    </Container>
  );

}