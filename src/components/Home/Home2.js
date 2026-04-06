import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              
              <br />
              I specialize in tools like
              <i>
                <b className="purple"> Adobe Photoshop, Adobe Premiere Pro, and Adobe After Effects, and DaVinci Resolve. </b>
              </i>
              <br />
              <br />
              My interests revolve around crafting engaging
              <i>
                <b className="purple"> Visual Stories </b>
              </i>
              and exploring the world of
              <i>
                &nbsp;<b className="purple">Cinematic Video Editing & Motion Graphics.</b>
              </i>
              <br />
              <br />
              Whenever possible, I love enhancing my projects with
              <i>
                <b className="purple"> color grading, visual effects, and smooth transitions </b>
              </i>
              using tools such as
              <i>
                <b className="purple"> Premiere Pro, After Effects, and DaVinci Resolve.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/___charan__02?igsh=MnFpZjBiZDA2MzRh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2; 
