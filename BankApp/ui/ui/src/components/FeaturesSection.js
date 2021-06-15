import React, { useContext } from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AspectRatio from "./AspectRatio";
import Image from "react-bootstrap/Image";
import "./FeaturesSection.scss";
import MA_logo from '../resources/MA_logo.png'
import { AuthorizationContext } from "../auth";
import { Button, Form, ListGroup } from "react-bootstrap";

function FeaturesSection(props) {

  const [auth, setAuth] = useContext(AuthorizationContext);

  console.log("Value of Auth in Features is: " + auth.jwt)

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
          title={`Welcome, ${auth.username}!`}
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
                      <p>put name info here</p>
                      
                    <ListGroup.Item>Username</ListGroup.Item>
                      <p>put username info here</p>

                    <ListGroup.Item>Email</ListGroup.Item>
                      <p>put emial here</p>

                    <ListGroup.Item>Address</ListGroup.Item>
                      <p>put address here</p>

                    <ListGroup.Item>Phone Number</ListGroup.Item>
                      <p>put phone num here</p>

                  </ListGroup>
                </Col>

              

          </Row>
        </Card>
      </Container>
    </Section>
  );
}

export default FeaturesSection;
