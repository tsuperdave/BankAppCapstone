import React, { useState } from 'react'
import { Button, Form, Jumbotron } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { REST_API, API_PORT } from '../constants/actionTypes'


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

const logout = () => {
    localStorage.clear();
}

export default function SigninOut({ setToken }) {

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
                </Button>{' '}

                <Button id="log-out-button" variant="info" type="reset" onClick={logout}>
                    Logout
                </Button>        

            </Form>
            
        </>
    )
}

// Signin.propTypes = {
//     setToken: PropTypes.func.isRequired
// };

