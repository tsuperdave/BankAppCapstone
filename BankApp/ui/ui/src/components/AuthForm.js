import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormField from "./FormField";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useAuth } from "./../auth.js";
import { useForm } from "react-hook-form";

function AuthForm(props) {
  const auth = useAuth();

  const [pending, setPending] = useState(false);
  const { handleSubmit, register, errors, getValues } = useForm();

  const submitHandlersByType = {
    signin: ({ usernameOrEmail, pass }) => {
      return auth.signin(usernameOrEmail, pass).then((user) => {
        // Call auth complete handler
        props.onAuth(user);
      });
    },
    signup: ({ email, pass }) => {
      return auth.register(email, pass).then((user) => {
        // Call auth complete handler
        props.onAuth(user);
      });
    },
    
  };

  // Handle form submission
  const onSubmit = ({ email, pass }) => {
    // Show pending indicator
    setPending(true);

    // Call submit handler for auth type
    submitHandlersByType[props.type]({
      email,
      pass,
    }).catch((error) => {
      setPending(false);
      // Show error alert message
      props.onFormAlert({
        type: "error",
        message: error.message,
      });
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} > 
      {["signup", "signin"].includes(props.type) && (
        <Form.Group controlId="formUsername">
          <FormField
            size="lg"
            name="username"
            type="text"
            placeholder="Enter Username"
            error='test error'
            
          />
        </Form.Group>
      )}

      {["signup", "signin"].includes(props.type) && (
        <Form.Group controlId="formPassword">
          <FormField
            size="lg"
            name="pass"
            type="password"
            placeholder="Password"
            error='test error'
          
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
            error={errors.confirmPass}
            inputRef={register({
              required: "Please enter your password again",
              validate: (value) => {
                if (value === getValues().pass) {
                  return true;
                } else {
                  return "This doesn't match your password";
                }
              },
            })}
          />
        </Form.Group>
      )}

      <Button
        variant="primary"
        block={true}
        size="lg"
        type="submit"
        disabled={pending}
      >
        {!pending && <span>{props.typeValues.buttonText}</span>}

        {pending && (
          <Spinner
            animation="border"
            size="sm"
            role="status"
            aria-hidden={true}
            className="align-baseline"
          >
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
      </Button>
    </Form>
  );
}

export default AuthForm;
