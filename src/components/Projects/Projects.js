import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import AIchatbot from "../../Assets/Projects/AIchatbot.png"; 
import todolist from "../../Assets/Projects/todolist.jpg";  
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
              imgPath={todolist}
              isBlog={false}
              title="To-Do List"
              description="A clean and responsive To-Do List web app that allows users to add, view, and manage daily tasks through an interactive calendar. Built using HTML, CSS, and JavaScript with localStorage for data persistence."
              ghLink=" https://github.com/prasanthirapuru/to-do-list"
              demoLink="https://to-do-list-livid-phi-58.vercel.app/"
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
