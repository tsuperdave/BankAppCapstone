import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import { Link } from "./../router";
import "./Footer.scss";
import MA_logo from "../resources/imgs/MA_logo.png"

export default function Footer(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      className="footer"
    >
      <Container>
        <div className="FooterComponent__inner">
          <div className="brand left">
            <Link to="/home">
              <img src={MA_logo} alt="Logo" />
            </Link>
          </div>
          <div className="links right">
            <Link to="/aboutus">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="social right">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <i className="fab fa-twitter" />
              </span>
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <i className="fab fa-facebook-f" />
              </span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <i className="fab fa-instagram" />
              </span>
            </a>
          </div>
          <div className="copyright left">{props.copyright}</div>
        </div>
      </Container>
    </Section>
  );
}

