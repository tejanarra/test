import React from 'react';
import './Styles/Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="projects-heading">Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3 className="project-title">Task Manager Web App</h3>
            <p className="project-description">
              A web app to manage tasks efficiently with CRUD functionalities.
            </p>
            <a href="https://tejanarra.github.io/Task-Manager/" className="btn btn-primary">View Project</a>
          </div>
          <div className="project-card">
            <h3 className="project-title">Mobile Apps (Flutter)</h3>
            <p className="project-description">
              A collection of mobile applications developed using Flutter.
            </p>
            <a href="https://github.com/tejanarra/Mobile_Application_Development" className="btn btn-primary">View Project</a>
          </div>
          <div className="project-card">
            <h3 className="project-title">E-Commerce Platform</h3>
            <p className="project-description">
              A full-fledged e-commerce platform built with Angular and Spring Boot.
            </p>
            <a href="https://github.com/tejanarra/E-Commerce_Platform_Angular_SpringBoot" className="btn btn-primary">View Project</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;