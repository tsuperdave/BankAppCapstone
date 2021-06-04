import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
// import PropTypes from 'prop-types'
// import { REST_API, API_PORT, SIGN_IN } from '../types'

async function signinUser(credentials) {
    console.log("FETCH")
    return fetch('http://localhost:8080/api/auth/signin', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}


export default function Signin({ setToken }) {

    const [usernameOrEmail, setUsername] = useState('');
    const [password, setPassword] = useState(''); 
  
    const handleSubmit = async e => {
    
      e.preventDefault();
     
      const token = await signinUser({
        usernameOrEmail,
        password
      });
      setToken(token);
        
    }

    return (
        <>
            <Form inline onSubmit={handleSubmit}>

                <Form.Group >
                    <Form.Label htmlFor="inputUsername">
                        Username
                    </Form.Label>
                    <Form.Control type="text" className="mx-sm-3" placeholder="Please Enter Username or Email" onChange={e => setUsername(e.target.value)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="inputPassword">
                        Password
                    </Form.Label>
                    <Form.Control type="password" placeholder="Please Enter Password" className="mx-sm-3" id="inputPassword" onChange={e => setPassword(e.target.value)}/>
                </Form.Group>
                
                <Button id="sign-in-button" variant="info" type="submit">
                    Submit
                </Button>

            </Form>
        </>
    )
}

// Signin.propTypes = {
//     setToken: PropTypes.func.isRequired
// };

