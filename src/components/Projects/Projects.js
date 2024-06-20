import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import spotifyClone from "../../Assets/Projects/spotifyClone.png";
import forFoody from "../../Assets/Projects/forFoody.png";
import personal from "../../Assets/Projects/person.png";
import wanderlust from "../../Assets/Projects/wanderlust.png";

function Projects() {
  return (
    <Container fluid className="project-section" id="projects">
      {/* <Particle /> */}
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
              imgPath={personal}
              isBlog={false}
              title="Personal Manager"
              description="
The Personal Manager is a comprehensive web application built with the MERN stack (MongoDB, Express.js, React, and Node.js) to help users stay organized and productive. It features a diary for personal journaling, a robust notes system, a to-do list for task management, schedulers to plan and receive email reminders 5 minutes before tasks start, and a goals section to set and track long-term aspirations. With its user-friendly interface, the Personal Manager streamlines daily routines and supports goal achievement, making it an essential tool for personal productivity and organization."
              ghLink="https://github.com/AvinashSuthar/personalmanagerfrontend"
              demoLink="https://main--personalmanager.netlify.app/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wanderlust}
              isBlog={false}
              title="WanderLust"
              description="Wanderlust is a dynamic website built with Node.js, Express, and EJS, designed for seamless hotel and room hosting. It allows users to host their hotels and rooms, providing a platform for others to browse and book accommodations. The site features a robust review system where guests can leave feedback, enhancing the booking experience for future visitors. Additionally, Wanderlust includes comprehensive authentication and authorization mechanisms to ensure secure user interactions and data protection."
              ghLink="https://github.com/AvinashSuthar/wanderlust"
              demoLink="https://wanderlust-i2mu.onrender.com/listing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forFoody}
              isBlog={false}
              title="For Foody"
              description="Foody is an interactive website that fetches data from the backend to provide users with a rich culinary experience. With powerful filtering capabilities, users can easily find and explore a wide variety of recipes, restaurants, and food items tailored to their preferences. The intuitive interface ensures a seamless browsing experience, making it simple to discover new and exciting culinary delights. Foody is designed to cater to food enthusiasts, helping them navigate through an extensive collection of gastronomic options effortlessly."
              ghLink="https://github.com/AvinashSuthar/foodFontend"
              demoLink="https://forfoody.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotifyClone}
              isBlog={false}
              title="Spotify Clone"
              description="The Spotify Clone frontend is a sleek and modern web application built using HTML, CSS, and JavaScript. This project mimics the visual design of Spotify, providing users with an intuitive interface. It includes a sidebar for easy navigation, a search bar to find songs, artists, or podcasts, and a main content area displaying playlists and recently played tracks."
              ghLink="https://github.com/AvinashSuthar/spotify-clone"
              demoLink="https://avinashsuthar.github.io/spotify-clone/"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
