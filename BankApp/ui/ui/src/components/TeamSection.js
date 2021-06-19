import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Avatar from "./Avatar";
import "./TeamSection.scss";
import MA_logo from '../resources/imgs/MA_logo.png';
import ashwin from '../resources/imgs/ashwin.png';
import dave from '../resources/imgs/dave.png';
import AspectRatio from "./AspectRatio";
import Image from "react-bootstrap/esm/Image";

function TeamSection(props) {
  const items = [
    {
      headerImage: "https://source.unsplash.com/npxXWgQ33ZQ",
      img: dave,
      name: "Daved T.",
      role: "Software Engineer Team Lead",
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.",
    },
    {
      headerImage:"https://source.unsplash.com/iacpoKgpBAM",
      img: ashwin,
      name: "Ashwin N.",
      role: "Software Engineer",
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.",
    },
    {
      headerImage: "https://source.unsplash.com/eo3Xr2yhYVw",
      img: MA_logo,
      name: "Judith M.",
      role: "Software Engineer",
      bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.",
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
                <AspectRatio ratio={3 / 1}>
                  <Image src={item.headerImage} fluid={true} />
                </AspectRatio>
                <Card.Body className="d-flex flex-column text-center align-items-center p-4">
                  <div className="TeamBiosSection__avatar-wrapper">
                    <Avatar
                      src={item.img}
                      alt={item.name}
                      size="128px"
                    />
                  </div>
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
