import React, { useContext, useEffect, useState } from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { AuthorizationContext } from "../auth";

function AccountsOverview(props) {

  console.log("1 - load");

  const [auth, setAuth] = useContext(AuthorizationContext);
  let items = [];

  useEffect(() => {
    console.log("2 - useEffect");
    fetchAccountInfo();
    console.log("Post FETCH")
  }, []);

  const [accountInfo, setAccountInfo] = useState({
    firstName: null,
    middleName: null,
    lastName: null,
    ssn: null,
    personalCheckingAccount: {},
    dbaCheckingAccountList: [{}],
    savingsAccount:{},
    cdAccountList: [{}],
    ira: {},
    rolloverIra: {},
    rothIra: {},
    accountHolderContactDetails: {},
    combinedBal: {}       
  });

  
  // const dbaAccounts = accountInfo.dbaCheckingAccountList;
  // const cdAccounts = accountInfo.cdAccountList;
  console.log("DBA checking test: " + accountInfo.dbaCheckingAccountList[0].id);

  // ------------------- WRAP IN FUNCTION

  // async function setItems () {
    items = [
      {
        accountType: "DBA Checking",
        accountNum: `Acct. # ${accountInfo.dbaCheckingAccountList[0].id}`,
        balance: `Balance $ ${accountInfo.dbaCheckingAccountList[0].balance}`,
      },
      {
        accountType: "Personal Checking",
        accountNum: `Acct. # ${accountInfo.personalCheckingAccount['id']}`,
        balance: `Balance $ ${accountInfo.personalCheckingAccount['balance']}`,
      },
      {
        accountType: "Savings Account",
        accountNum: `Acct. # ${accountInfo.savingsAccount['id']}`,
        balance: `Balance $ ${accountInfo.savingsAccount['balance']}`,
      },
      {
        accountType: "CD Account",
        accountNum: `Acct. # ${accountInfo.cdAccountList[0].id}`,
        balance: `Balance $ ${accountInfo.cdAccountList[0].balance}`,
      },
      {
        accountType: "IRA",
        accountNum: `Acct. # ${accountInfo.ira['id']}`,
        balance: `Balance $ ${accountInfo.ira['balance']}`,
      },
      {
        accountType: "Roth IRA",
        accountNum: `Acct. # ${accountInfo.rothIra['id']}`,
        balance: `Balance $ ${accountInfo.rothIra['balance']}`,
      },
      {
        accountType: "Rollover IRA",
        accountNum: `Acct. # ${accountInfo.rolloverIra['id']}`,
        balance: `Balance $ ${accountInfo.rolloverIra['balance']}`,
      },
    ]
  // }

  console.log("3 - after accountInfo");
  console.log("--- after accountInfo: " + accountInfo.firstName);
  
  async function fetchAccountInfo() {
    console.log("4 - FETCH accountInfo");
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
          dbaCheckingAccountList: data.dbaCheckingAccountList,
          savingsAccount: data.savingsAccount,
          cdAccountList: data.cdAccountList,
          ira: data.traditionalIRA,
          rolloverIra: data.rolloverIRA,
          rothIra: data.rothIRA,
          accountHolderContactDetails: data.accountHolderContactDetails,
          combinedBal: data.combinedBal
        });
        // setItems();
        console.log("5 - set accountInfo from FETCH");
        console.log("------- accountInfo from FETCH is " + accountInfo);
      });     
  }

  
  console.log("7 - return is next");
  // ---------------------------------------------------------

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
        
          {/* {!items == null && ( */}
            {items.map((item, index) => (
            <Col xs={12} md={6} lg={4} className="py-3" key={index}>
              <Card>
                <Card.Body className="d-flex flex-center text-left p-4">
                <h5 className="font-weight-bold mb-0 mt-3">
                    {item.accountType}
                  </h5>
                  <small className="text-muted">{item.accountNum}</small>
                  
                  <small className="text-muted">{item.balance}</small>
                </Card.Body>
              </Card>
            </Col>
          ))}
          {/* )} */}

        </Row>
      </Container>
    </Section>
  );
}

export default AccountsOverview;
