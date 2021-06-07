import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function AccountsOverview(props) {
  const items = [
    {
      accountType: "DBA Checking",
      accountNum: "12345",
      balance: "$",
    },
    {
      accountType: "Personal Checking",
      accountNum: "12345",
      balance: "$",
    },
    {
      accountType: "Savings",
      accountNum: "12345",
      balance: "$",
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
            <Col xs={12} md={6} lg={4} className="py-3" key={index}>
              <Card>
                <Card.Body className="d-flex flex-center text-left p-4">
                  <small className="text-muted">{item.accountNum}</small>
                  <h5 className="font-weight-bold mb-0 mt-3">
                    {item.accountType}
                  </h5>
                  <small className="text-muted">{item.balance}</small>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
}

export default AccountsOverview;
