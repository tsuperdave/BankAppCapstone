import React, { useContext, useState } from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import { AuthorizationContext } from "../auth";
import RegisterPopup from "./RegisterPopup";

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
      </Container>
    </Section>
  );
}

export default HeroSection;
