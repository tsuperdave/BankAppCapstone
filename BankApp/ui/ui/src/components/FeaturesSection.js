import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AspectRatio from "./AspectRatio";
import Image from "react-bootstrap/Image";
import "./FeaturesSection.scss";

function FeaturesSection(props) {
  const items = [
    {
      title: "Find Best CD Offer Now!",
      body: "Get the best rate here!",
      image: "",
    },
    {
      title: "Update Details",
      body: "Update contact details (email, phone number, display name)",
      image: "",
    },
    {
      title: "Block Title",
      body: "Some random other stuff to do here",
      image: "",
    },
    {
      title: "Some other block title",
      body: "moar stuff",
      image: "",
    },
  ];

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
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
        />
        <Card>
          <Row className="no-gutters overflow-hidden">
            {items.map((item, index) => (
              <Col
                xs={12}
                lg={6}
                style={{
                  display: "flex",
                  alignItems: "stretch",
                  justifyContent: "center",
                  boxShadow: "1px 1px 0 0 #efefef",
                }}
                key={index}
              >
                <div className="FeaturesSection__item has-text-centered">
                  <div className="FeaturesSection__image-container">
                    <AspectRatio ratio={4 / 3}>
                      <Image src={item.image} alt={item.title} fluid={true} />
                    </AspectRatio>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Card>
      </Container>
    </Section>
  );
}

export default FeaturesSection;
