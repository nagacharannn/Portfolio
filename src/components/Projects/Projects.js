import React from "react";
import { Container, Row, Col } from "react-bootstrap"; 
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
 
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
          <Col md={4} className="project-card">
            <ProjectCard
              title="Social media trend"
              driveLink="https://drive.google.com/file/d/1dBggJAnvX3cp8FBiMj_aPfkt3zc7sPBr/view?usp=sharing"
              ratio="9:16"
              isImage={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Graphic design"
              driveLink="https://drive.google.com/file/d/1pm_uqqRCdftgXd98KG7C2m2SNu5_Fl7b/view"
              ratio="9:16"
              isImage={true}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Kathanika"
              driveLink="https://drive.google.com/file/d/1PG5SOrTKu7x9TRYHzITwiGurAB3aOO0t/preview"
              ratio="9:16"
              isImage={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Thumbnail"
              driveLink="https://drive.google.com/file/d/194hBW020hP6lCfcVURfD9h-pgYpVZ64G/preview"
              ratio="9:16"
              isImage={true}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Podcast"
              driveLink="https://drive.google.com/file/d/1KJTA19ITTjxdYDS8hOiS7VvX4AczjnaI/preview"
              ratio="9:16"
              isImage={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Commercial promotions"
              driveLink="https://drive.google.com/file/d/1zrIdEy3FqkkHBe6rGV_uBwstWUJwgRpT/preview"
              ratio="9:16"
              isImage={false}
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="PRABHAS|My Name Is Billa lyrics Edi"
              
              videoLink="https://www.youtube.com/watch?v=10WNKtv7u3M"

              caption="PRABHAS|My Name Is Billa lyrics Edit"
              ratio="16:9"
              isImage={false}

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="3d camera tracking"
              
              driveLink="https://drive.google.com/file/d/1NiH5zgIUwQamD9U7hLuvAmPWAhh61qVI/preview"

              caption="3d camera tracking"
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
