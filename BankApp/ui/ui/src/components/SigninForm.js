import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useAuth } from "../auth.js";
import Container from "react-bootstrap/esm/Container";
import { useHistory } from "react-router";

export default function SigninForm({ props }) {
  // const auth = useAuth();

  const [token, setToken] = useState('');
  const [usernameOrEmail, setUsername] = useState('');
  const [password, setPassword] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [firstName, setFirstName] = useState(''); 
  const [lastName, setLastName] = useState(''); 
  
  const handleSubmit = async e => {
    e.preventDefault();

    console.log("Submit pressed from handleSubmit")
    console.log(usernameOrEmail)
    console.log(password)

    const token = signin({
      usernameOrEmail,
      password
    })
    setToken(token);
    // reroute to admin page
   
  };
 
  const history = useHistory();

  const goBack = () => {
    history.goBack()
  }

  console.log("fetch token in auth.js")
  async function signin(credentials) {
    console.log("SIGN IN");
    return fetch("http://localhost:8080/api/auth/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ usernameOrEmail, password }),
    }).then((data) => data.json())
    // .then((res) => handleAuth(res.user));
  }

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

  const useToken = () => {
    const getToken = () => {
      const tokenString = localStorage.getItem("jwt");
      const userToken = JSON.parse(tokenString);
      return userToken?.token;
    };

    const [token, setToken] = useState(getToken());

    const saveToken = (userToken) => {
      localStorage.setItem("jwt", JSON.stringify(userToken));
      setToken(userToken.token);
    };
  };

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