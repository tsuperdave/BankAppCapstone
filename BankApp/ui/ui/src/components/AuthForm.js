import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useAuth } from "./../auth.js";
import Container from "react-bootstrap/esm/Container";
import { useHistory } from "react-router";

function AuthForm(props) {
  const auth = useAuth();

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

    //////
    submitHandlersByType[props.type] ({
      usernameOrEmail,
      password
    })
    .catch((error) => {
      
      // Show error alert message
      props.onFormAlert({
        type: "error",
        message: error.message,
      });
    // may need to catch error here?
    setToken(token);
    });
  };

  console.log("Sending info to Handler")
  console.log(usernameOrEmail)
  console.log(password)

  const submitHandlersByType = {
    
    signin: ({ usernameOrEmail, password }) => {
      return auth.signin(usernameOrEmail, password)
      .then((user) => {
        // Call auth complete handler
        props.onAuth(user);
      });
    },
    signup: ({ email, password }) => {
      return auth.register(firstName, lastName, email, usernameOrEmail, password)
      .then((user) => {
        // Call auth complete handler
        props.onAuth(user);
      });
    }
    
  };

  ////  

  const history = useHistory();

  const goBack = () => {
    history.goBack()
  }

  return (

    <Container>
      <Form onSubmit={handleSubmit} > 
        {["signup", "signin"].includes(props.type) && (
          <Form.Group controlId="formUsernameOrEmail">
            <Form.Control
              size="lg"
              name="usernameOrEmail"
              type="text"
              placeholder="Enter Username"
              onChange={e => setUsername(e.target.value)}
           
            />
          </Form.Group>
        )}

        {["signup", "signin"].includes(props.type) && (
          <Form.Group controlId="formPassword">
            <Form.Control
              size="lg"
              name="password"
              type="password"
              placeholder="Password" 
              onChange={e => setPassword(e.target.value)}    
            />
          </Form.Group>
        )}

        {/* {["signup"].includes(props.type) && (
          <Form.Group controlId="formConfirmPass">
            <FormField
              size="lg"
              name="confirmPass"
              type="password"
              placeholder="Confirm Password"
  
            />
          </Form.Group>
        )} */}

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

export default AuthForm;
