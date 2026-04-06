import React from "react";
import { Col, Row } from "react-bootstrap";

// Software Icons
import {
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobeaftereffects,
} from "react-icons/si";

// Icons from 'di' (Devicons)
import {
  DiGithubBadge,      // NEW: GitHub
} from "react-icons/di";


function Toolstack() {
  return (
    <>
      {/* Section Title */}


      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        
        {/* Photoshop */}
        <Col xs={4} md={2} className="tech-icons">
          <SiAdobephotoshop />
        </Col>

        {/* Premiere Pro */}
        <Col xs={4} md={2} className="tech-icons">
          <SiAdobepremierepro />
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <SiAdobeaftereffects />
        </Col>

      </Row>
    </>
  );
}


export default Toolstack;
