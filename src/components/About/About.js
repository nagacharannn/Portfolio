import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row className="about-row" style={{ padding: "10px" }}>
          
          {/* LEFT SIDE TEXT */}
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>

          {/* RIGHT SIDE IMAGE */}
          <Col
            md={5}
            className="about-img d-flex justify-content-center align-items-center"
          >
            <img src={laptopImg} alt="about" className="img-fluid about-image" />
          </Col>

        </Row>

        <h1 className="project-heading">
          <strong className="purple">Softwares </strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
