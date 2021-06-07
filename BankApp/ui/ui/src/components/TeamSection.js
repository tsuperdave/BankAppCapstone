import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Avatar from "./Avatar";

function TeamSection(props) {
  const items = [
    {
      avatar: "",
      name: "Daved T",
      role: "Software Engineer Team Lead",
      bio: "Dream big, dare to fail.",
    },
    {
      avatar: "",
      name: "Ashwin S",
      role: "Software Engineer",
      bio: "Test Here",
    },
    {
      avatar: "",
      name: "Judith M",
      role: "Software Engineer",
      bio: "Text Here",
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
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
        <Row className="justify-content-center">
          {items.map((item, index) => (
            <Col
              xs={12}
              md={6}
              lg={4}
              className="py-3 d-flex align-items-stretch"
              key={index}
            >
              <Card>
                <Card.Body className="d-flex flex-column text-center align-items-center p-4">
                  <Avatar src={item.avatar} alt={item.name} size="128px" />
                  <h6 className="font-weight-bold mb-0 mt-4">{item.name}</h6>
                  <small>{item.role}</small>
                  <Card.Text className="mt-4">{item.bio}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
}

export default TeamSection;
