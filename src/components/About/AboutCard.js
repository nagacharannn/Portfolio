import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Nagacharan Tambusetty</span>{" "}
            from <span className="purple">Andhra Pradesh, India</span>.
            <br />
            
           I am a <span className="purple">video editor</span> who brings stories to life through 
            <span className="purple"> clean</span>, 
            <span className="purple"> engaging</span>, and 
            <span className="purple"> impactful visuals</span>.
            <br />
            <br />
            Outside of editing, I love exploring activities that keep me inspired and creative:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Video Editing & Visual Effects 🎬
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring AI tools 🤖
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to create visuals that leave a lasting impact."{" "}
          </p>
          <footer className="blockquote-footer">Nagacharan Tambusetty</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
