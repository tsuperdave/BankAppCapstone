import React, { useContext, useState } from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import { AuthorizationContext } from "../auth";
import RegisterPopup from "./RegisterPopup";
import { Col, Image, Row } from "react-bootstrap";
import bg_city from '../resources/imgs/bg_city.jpg'

function HeroSection(props) {

  const [auth, setAuth] = useContext(AuthorizationContext);
  const [modalShow, setModalShow] = useState(false);

  return (
    <Section
      bgImage={props.bgImage}
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center">
      <Row className='align-items-center'>
        <Col lg={5} className="text-center text-lg-left">
          <SectionHeader
            title={props.title}
            subtitle={props.subtitle}
            size={1}
            spaced={true}
          />
       
        {!auth.jwt && (
          <>
            <Button onClick={() => setModalShow(true)} 
            variant={props.buttonColor} size="lg">
              {props.buttonText}
            </Button>

            <RegisterPopup
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
          </>
        )}
        </Col>

        <Col lg={5} className="offset-lg-1 mt-5 mt-lg-0 ">
          <figure className='mx-auto'>
            <Image src={bg_city} fluid={true} />
          </figure>
        </Col>

      </Row>
      </Container>
    </Section>
  );
}

export default HeroSection;
