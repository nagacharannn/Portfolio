import React from "react";
import { Container, Row, Col } from "react-bootstrap"; 
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import motionThumb from "../../Assets/Projects/thumb.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* GRAPHIC DESIGN */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="Graphic design"
              driveLink="https://drive.google.com/file/d/1pm_uqqRCdftgXd98KG7C2m2SNu5_Fl7b/view"
              ratio="9:16"
              isImage={true}
            />
          </Col>

          {/* MOTION GRAPHICS (CUSTOM THUMBNAIL) */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="Social Media Trends"
              driveLink="https://drive.google.com/file/d/17k8_mQvYlHLgiy9VKnpTwDl8z2spfNWc/preview"
              ratio="9:16"
              isImage={false}
              customThumbnail={motionThumb}
            />
          </Col>

          {/* SPEED RAMPING */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="Speed Ramping"
              driveLink="https://drive.google.com/file/d/1dBggJAnvX3cp8FBiMj_aPfkt3zc7sPBr/view?usp=sharing"
              ratio="9:16"
              isImage={false}
            />
          </Col>

          {/* TALKING HEAD */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="Talking Head"
              driveLink="https://drive.google.com/file/d/1SF0voVLCR-yuR6F5650PcyzH4KvGsbJD/preview"
              ratio="9:16"
              isImage={false}
            />
          </Col>

          {/* PODCAST */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="Podcast"
              driveLink="https://drive.google.com/file/d/1D-JbvbCQePqvbGXE_Z82F-WSz1D7boMo/preview"
              ratio="9:16"
              isImage={false}
            />
          </Col>

          {/* THUMBNAIL */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="Thumbnail"
              driveLink="https://drive.google.com/file/d/194hBW020hP6lCfcVURfD9h-pgYpVZ64G/view"
              ratio="9:16"
              isImage={true}
            />
          </Col>

          {/* 3D CAMERA TRACKING */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="3d camera tracking"
              driveLink="https://drive.google.com/file/d/1NiH5zgIUwQamD9U7hLuvAmPWAhh61qVI/preview"
              ratio="16:9"
              isImage={false}
            />
          </Col>

          {/* YOUTUBE VIDEO */}
          <Col md={4} className="project-card">
            <ProjectCard
              title="PRABHAS"
              videoLink="https://www.youtube.com/watch?v=10WNKtv7u3M"
              ratio="16:9"
              isImage={false}
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
