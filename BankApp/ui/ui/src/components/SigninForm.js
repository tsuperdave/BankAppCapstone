import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import { useHistory } from "react-router";
import jwt_decode from 'jwt-decode'
import { AuthorizationContext } from "../auth";

export default function SigninForm({ props }) {

  const [usernameOrEmail, setUsername] = useState('');
  const [password, setPassword] = useState(''); 
  const [auth, setAuth] = useContext(AuthorizationContext);
  // const [firstName, setFirstName] = useState(''); 
  // const [lastName, setLastName] = useState(''); 
  
  const handleSubmit = async e => {
    e.preventDefault();

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

  async function signin(credentials) {
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
      saveToken(data);
      signinRedirect(decodeAndSaveRole());
      setAuth({
        jwt: getToken(),
        role: decodeAndSaveRole(),
        isLoggedIn: true
      })
      // console.log(auth.role)
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
  
  const getToken = () => {
    const tokenString = localStorage.getItem("jwt");
    const userToken = JSON.parse(tokenString);
    return userToken.jwt;
  };

  const saveToken = (userToken) => {
    localStorage.setItem("jwt", JSON.stringify(userToken));
  };

  const decodeAndSaveRole = () => {
    const tokenString = localStorage.getItem('jwt');
      console.log("Grab token from local " + tokenString) // null
    const decoded = jwt_decode(tokenString);
      console.log("After decoding role " + decoded['sub'])  
    localStorage.setItem('userRole', JSON.stringify(decoded['sub']));
    return decoded['sub'];
  }

  const signinRedirect = (role) => {
    switch(role) {
      case "admin":
          // console.log(auth)
        history.push('/admin')
        break;
      case "user":
          // console.log(auth)
        history.push('/preferences')
        break;
      case "AccountHolder":
          // console.log(auth)
        history.push('/accounts')
        break;
      default:
          // console.log(auth)
        console.log("must Log in")
    }
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

// for reference
// setAuth({
//   jwt: saveToken(data),
//   role: signinRedirect(decodeAndSaveRole()),
//   isLoggedIn: true
// })