import React, { useContext, useEffect, useState } from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AspectRatio from "./AspectRatio";
import Image from "react-bootstrap/Image";
import "./FeaturesSection.scss";
import MA_logo from '../resources/imgs/MA_logo.png'
import { AuthorizationContext } from "../auth";
import { Button, Form, ListGroup } from "react-bootstrap";


function FeaturesSection(props) {

  const [auth, setAuth] = useContext(AuthorizationContext);
  const [accountInfo, setAccountInfo] = useState({
    firstName: null,
    middleName: null,
    lastName: null,
    ssn: null,
    personalCheckingAccount: {},
    savingsAccount:{},
    cdAccountList: {},
    accountHolderContactDetails: {},
    combinedBal: {}       
  });

  const [userInfo, setUserInfo] = useState({
    firstName: null,
    lastName: null,
    email: null
  })

  // console.log("User ID is + " + auth.userId)

  useEffect(() => {
    auth.role === '[AccountHolder]' ? fetchAccountInfo() : fetchUserInfo();
  }, []);

  async function fetchAccountInfo() {
    return fetch(`http://localhost:8080/api/Me/accountholder/${auth.userId}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }       
      })
      .then(res => res.json())
      .then(data => {
        setAccountInfo({
          firstName: data.firstName,
          middleName: data.middleName,
          lastName: data.lastName,
          ssn: data.ssn,
          personalCheckingAccount: data.personalCheckingAccount,
          savingsAccount: data.savingsAccount,
          cdAccountList: data.cdAccountList,
          email: data.user['email'],
          combinedBal: data.combinedBal
        });
        // console.log("Data after fetch: " + data)
      });     
  }

  async function fetchUserInfo() {
    return fetch(`http://localhost:8080/api/Me/${auth.userId}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }  
        // body: JSON.stringify(auth.userId),    
      })
      .then(res => res.json())
      .then(data => {
        setUserInfo({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email         
        });
        console.log("User data after fetch: " + data.firstName)
      });     
  }

  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center">
        <SectionHeader
          title={`Welcome, ${auth.role === "[AccountHolder]" ? accountInfo.firstName : userInfo.firstName}!`}
          subtitle='Preferences'
          size={2}
          spaced={true}
        />
        <Card>
          <Row className="no-gutters overflow-hidden">          
              <Col
                xs={12}
                lg={6}
                style={{
                  display: "flex",
                  alignItems: "stretch",
                  justifyContent: "center",
                  boxShadow: "1px 1px 0 0 #efefef",
                }} >

                <div className="FeaturesSection__item has-text-centered">
                  <div className="FeaturesSection__image-container">
                    <AspectRatio ratio={4 / 3}>
                      <Image src={MA_logo} fluid={true} />
                    </AspectRatio>
                  </div>                                    
                    <Form>
                      <Row>
                        <Col>
                          <Form.Group>
                            <Form.Label>Change Email</Form.Label>
                            <Form.Control type="email" placeholder="Change Email" />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group>
                            <Form.Label>Change Phone Number</Form.Label>
                            <Form.Control type="text" placeholder="123-456-7891" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                      <Form.Group>
                            <Form.Label>Change Address</Form.Label>
                            <Form.Control type="text" placeholder="1234 Main St." />
                          </Form.Group>
                      </Row>

                        <Button variant="primary" type="submit">Submit</Button>      
                    </Form>                  
                </div>                             
              </Col>
              
                <Col>
                  <ListGroup>
                    
                    <ListGroup.Item>Name</ListGroup.Item>
                      <p>{auth.role === '[AccountHolder]' ? accountInfo.firstName +" "+ accountInfo.middleName +" "+ accountInfo.lastName : userInfo.firstName +" "+ userInfo.lastName}</p>
                      
                    <ListGroup.Item>Username</ListGroup.Item>
                      <p>{auth.username}</p>

                    <ListGroup.Item>Email</ListGroup.Item>                    
                      <p>{auth.role === '[AccountHolder]' ? accountInfo.email : userInfo.email}</p>

                    <ListGroup.Item>Address</ListGroup.Item>
                      <p>1234 First St. Dallas, TX</p>

                    <ListGroup.Item>Phone Number</ListGroup.Item>
                      <p>111-111-1111</p>

                  </ListGroup>
                </Col>

              

          </Row>
        </Card>
      </Container>
    </Section>
  );
}

export default FeaturesSection;
