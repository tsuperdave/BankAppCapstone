import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormField from "./FormField";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useAuth } from "./../auth.js";
import { useForm } from "react-hook-form";
import Container from "react-bootstrap/esm/Container";
import { useHistory } from "react-router";

function AuthForm(props) {
  const auth = useAuth();

  const [token, setToken] = useState(null);
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState(''); 
  const [lastName, setLastName] = useState(''); 
  const { handleSubmit, getValues } = useForm();

  const submitHandlersByType = {
    signin: ({ usernameOrEmail, password }) => {
      return auth.signin(usernameOrEmail, password)
      .then((jwt) => {
        // Call auth complete handler
        props.onAuth(jwt);
      });
    },
    signup: ({ email, password }) => {
      return auth.register(firstName, lastName, email, username, password)
      .then((user) => {
        // Call auth complete handler
        props.onAuth(user);
      });
    },
    
  };

  // Handle form submission
  const onSubmit = ({ usernameOrEmail, password }) => {

    console.log("Submit pressed")
    
    submitHandlersByType[props.type] ({
      usernameOrEmail,
      password
    }).catch((error) => {
      props.onFormAlert({
        type: "error",
        message: error.message,
      });
    })
    console.log(usernameOrEmail)
    console.log(password)
  };

  const history = useHistory();

  const goBack = () => {
    history.goBack()
  }

  return (

    <Container>
      <Form onSubmit={handleSubmit(onSubmit)} > 
        {["signup", "signin"].includes(props.type) && (
          <Form.Group controlId="formUsernameOrEmail">
            <Form.Control
              size="lg"
              name="usernameOrEmail"
              type="text"
              placeholder="Enter Username"
              // onChange={e => setUsernameOrEmail(e.target.value)}
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
              // onChange={e => setPassword(e.target.value)}    
            />
          </Form.Group>
        )}

        {["signup"].includes(props.type) && (
          <Form.Group controlId="formConfirmPass">
            <FormField
              size="lg"
              name="confirmPass"
              type="password"
              placeholder="Confirm Password"
  
            />
          </Form.Group>
        )}

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
