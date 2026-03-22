import React from "react";
import { Container, Row, Col } from "react-bootstrap"; 
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import AIchatbot from "../../Assets/Projects/AIchatbot.png";  
import cloudguardai from "../../Assets/Projects/cloudguardai.png";   
import waterqualityprediction from "../../Assets/Projects/waterqualityprediction.png"; 
 
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
              imgPath={cloudguardai}
              isBlog={false}
              title="CloudGuard_AI"
              description="A backend-driven cloud security analysis system built using Django and machine learning techniques.It detects anomalies and classifies potential threats from cloud data efficiently.The system provides APIs for data processing, model execution, and prediction workflows."
              ghLink="https://github.com/prasanthirapuru/cloud-security-project"
              demoLink="https://cloud-security-project.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={waterqualityprediction}
              isBlog={false}
              title="Quality Prediction"
              description="A machine learning–based Water Quality Prediction app that forecasts key pollutant levels using historical environmental data. Built with Python, Pandas, NumPy, Scikit-learn, and deployed using Streamlit for an interactive web interface."
              ghLink="https://github.com/prasanthirapuru/waterqualityprediction"
              demoLink="https://waterqualityprediction-oedcfuqibfaou6pjdfd2tq.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AIchatbot}
              isBlog={false}
              title="AI-Chatbot"
              description="An AI-powered chatbot that interacts with users in real time and provides intelligent responses based on user queries. Built using Node.js and Express for the backend, with integrated NLP/model APIs for conversational intelligence."
              ghLink="https://github.com/prasanthirapuru/AI-chatbot"
              demoLink="https://ai-chatbot-tau-two-40.vercel.app"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
