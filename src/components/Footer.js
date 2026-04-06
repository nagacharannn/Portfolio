import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Ngacharan | Video Editor</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} NC </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {/* GitHub Icon */}
            
            <li className="social-icons">
              
              <a
                href="https://www.instagram.com/___charan__02/?igsh=MnFpZjBiZDA2MzRh"
                style={{ color: "white", marginLeft: "10px" }} // spacing between icons
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            
          

          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
