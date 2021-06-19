import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import { useHistory } from "react-router";
import jwt_decode from 'jwt-decode'
import { AuthorizationContext } from "../auth";
import { FormControl } from "react-bootstrap";

export default function SigninForm({ props }) {

  const [usernameOrEmail, setUsername] = useState('');
  const [password, setPassword] = useState(''); 
  const [auth, setAuth] = useContext(AuthorizationContext);

  // const [valid, setValid] = useState(false);
  
  const handleSubmit = async e => {
    // const form = e.currentTarget;
    
    // if(form.checkValidity() === false) {
      e.preventDefault();
      // e.stopPropagation();
    // }

    // setValid(true);

    signin({
      usernameOrEmail,
      password
    })
    
  };

  const history = useHistory();

  const goBack = () => {
    history.goBack()
  }
  
  const goHome = () => {
    history.push('/home')
  }

  async function signin() {
    return fetch("http://localhost:8080/api/auth/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ usernameOrEmail, password }),
    })
    .then(res => res.json())
    .then(data => {

      setAuth({
        jwt: data.jwt,
        role: data.roles,
        userId: data.userId,
        username: decodeAndSaveRole(data.jwt),
        isLoggedIn: true
      })
      signinRedirect(data.roles)
      
    }).catch(e => {
      console.log('Invalid Credentials')
    })
  }
  
  async function signup(credentials) {
    return fetch("http://localhost:8080/api/auth/registerUser", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }

  const decodeAndSaveRole = (token) => {
    const decoded = jwt_decode(token);
    
    return decoded['sub'];
  }

  const signinRedirect = (role) => {
    JSON.stringify(role);
    switch(role) {
      case "[admin]":
          // console.log(auth)
        history.push('/admin')
        break;
      case "[user]":
          // console.log(auth)
        history.push('/preferences')
        break;
      case "[AccountHolder]":
          // console.log(auth)
        history.push('/accounts')
        break;
      default:         
        console.log("Must Log in");
    }
  }

  return (

    <Container>
      <Form onSubmit={handleSubmit}> 
      <div className='mx-auto mt-2'>
          <Form.Group controlId="formUsernameOrEmail">
            <Form.Control
              
              size="lg"
              name="usernameOrEmail"
              type="text"
              placeholder="Enter Username"
              required
              onChange={e => setUsername(e.target.value)}        
            />
            {/* <FormControl.Feedback type='invalid'>Please enter your user name!</FormControl.Feedback> */}
          </Form.Group>
          </div>
          <div className='mx-auto mt-2'>
            <Form.Group controlId="formPassword">
              <Form.Control
                
                size="lg"
                name="password"
                type="password"
                placeholder="Password" 
                required
                onChange={e => setPassword(e.target.value)}    
              />
              {/* <FormControl.Feedback type='invalid'>Please enter your password!</FormControl.Feedback> */}
            </Form.Group>
          </div>
        <div className='row mx-auto mt-2'>
          <Button
            variant="primary"
            block={true}
            size="lg"
            type="submit"
            >
            Sign in
          </Button>
        </div> 
      </Form>
      <div className='mx-auto mt-2'>
        <Button onClick={goHome}
            variant="primary"
            block={true}
            size="lg"
            type="secondary"
            >
            Home Page
        </Button>
      </div> 
    </Container>
  );

}
