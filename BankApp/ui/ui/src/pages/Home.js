import React from 'react'
import NavbarHeader from '../components/NavbarHeader';
import SigninOut from '../components/SigninOut'
import Register from '../components/Register';
import useToken from '../components/useToken';
import Preferences from '../containers/Preferences'
import Alert from 'react-bootstrap/Alert'
import { BrowserRouter, Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import { Col, Container, Row } from 'react-bootstrap';

export default function Home ({ setToken }) {
        
    return (
            <>
            <Container>
                <NavbarHeader />
                    <Row>
                        <Col xl lg='2'></Col>
                        <Col md='auto'>
                            <SigninOut setToken={setToken}/>
                        </Col>
                        <Col xl lg='2'></Col>
                    </Row>
                    <Row>
                        <Col xl lg='2'></Col>
                        <Col md='auto'>
                            <Register /> 
                        </Col>
                        <Col xl lg='2'></Col>     
                    </Row>
                
            </Container>                  
            </>
        );
}



