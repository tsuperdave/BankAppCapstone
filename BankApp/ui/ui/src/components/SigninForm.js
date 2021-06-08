import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import { Redirect, useHistory } from "react-router";
import jwt_decode from 'jwt-decode'

export default function SigninForm({ props }) {

  const [usernameOrEmail, setUsername] = useState('');
  const [password, setPassword] = useState(''); 
  // const [email, setEmail] = useState(''); 
  // const [firstName, setFirstName] = useState(''); 
  // const [lastName, setLastName] = useState(''); 
  
  const handleSubmit = async e => {
    e.preventDefault();

    signin({
      usernameOrEmail,
      password
    })

    const role = decodeAndSaveRole();

    console.log(role)
    
    switch(role){
      case 'admin':
        history.push('/admin')
        break;
      case 'user':
        <Redirect to='/accounts' />
        break;
      default:
        console.log("must Log in")
    }

    // history.push('/accounts')
    // reroute to accounts page by default IF accountHolder,
    // ... preferences if user
    // ... admin if admin
   
  };

  const history = useHistory();

  const goBack = () => {
    history.goBack()
  }

  const goHome = () => {
    history.push('/home')
  }

  async function signin(credentials) {
    return fetch("http://localhost:8080/api/auth/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ usernameOrEmail, password }),
    }).then(res => res.json())
    .then(data => {
      saveToken(data);
      // error is running this
      // decodeAndSaveRole();
      
      
    })         
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

  
  const getToken = () => {
    const tokenString = localStorage.getItem("jwt");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };


  const saveToken = (userToken) => {
    localStorage.setItem("jwt", JSON.stringify(userToken));
    // setToken(userToken.token);
  };

  function decodeAndSaveRole() {
    const tokenString = localStorage.getItem('jwt');
      // console.log(tokenString) // null
    const role = JSON.parse(tokenString);
    // console.log(role) // null
    const decoded = jwt_decode(tokenString);
      // console.log(decoded['sub'])  
    localStorage.setItem('userRole', JSON.stringify(decoded['sub']));
    return decoded['sub'];
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

      <Button onClick={goHome}
          variant="primary"
          block={true}
          size="lg"
          type="secondary"
          >
          Home Page
      </Button>

    </Container>
  );

}