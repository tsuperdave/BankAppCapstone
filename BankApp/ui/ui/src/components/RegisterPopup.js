import React, { useState } from 'react'
import { Button, Col, Form, InputGroup, Modal } from 'react-bootstrap'


async function registerUser(credentials) {
    //console.log("FETCH")
    return fetch('http://localhost:8080/api/auth/registerUser', {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

export default function RegisterPopup(props) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState(''); 
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const handleSubmit = e => {
        e.preventDefault();

        const register = registerUser({
            firstName,
            lastName,
            email,
            username,
            password
        });
    }

    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-center">
                    Register
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridFirstName">
                                <Form.Label>
                                    First Name
                                </Form.Label>                              
                                <Form.Control type="text" placeholder="Enter First Name" onChange={e => setFirstName(e.target.value)}/>   
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLastName">
                                <Form.Label>
                                    Last Name
                                </Form.Label>
                                <Form.Control type="text" placeholder="Enter Last Name" onChange={e => setLastName(e.target.value)}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridEmail">
                            <Form.Label>
                                Email
                            </Form.Label>
                            <Form.Control placeholder="user@gmail.com..etc" onChange={e => setEmail(e.target.value)}/>
                        </Form.Group>

                        <Form.Group controlId="formGridUsername">
                            <Form.Label>
                                Username
                            </Form.Label>
                            <Form.Control placeholder="Please enter a user name" onChange={e => setUsername(e.target.value)}/>
                        </Form.Group>

                        <Form.Group controlId="formGridPassword">
                            <Form.Label>
                                Password
                            </Form.Label>
                            <Form.Control type="password" placeholder="Enter a Password" onChange={e => setPassword(e.target.value)}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                    <Button onClick={props.onHide}>
                        Cancel
                    </Button>
                </Modal.Footer>

            </Modal>
        </>
    )
}

