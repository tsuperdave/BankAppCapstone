import React, { useContext, useEffect, useState } from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { AuthorizationContext } from "../auth";

function AccountsOverview(props) {

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

  console.log("Account info: " + accountInfo);

  useEffect(() => {
    fetchAccountInfo();
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
        console.log(data);
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
        // console.log("Data after fetch in AccountsOverview: " + data)
      });     
  }

  const items = [
    {
      accountType: "DBA Checking",
      accountNum: "12345",
      balance: "$",
    },
    {
      accountType: "Personal Checking",
      accountNum: `Acct. # ${accountInfo.personalCheckingAccount['id']}`,
      balance: `Balance $ ${accountInfo.personalCheckingAccount['balance']}`,
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
