import React from 'react';
import './Styles/About.css'; // Make sure this file exists

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="about-heading">About Me</h2>
        <p className="about-description">
          Experienced full-stack developer with 3+ years of experience in application development.
          Proficient in creating scalable applications using React, Angular, and modern technologies.
        </p>

        <div className="about-info">
          <div className="info-item">
            <strong>Date of Birth:</strong> January 1, 1995
          </div>
          <div className="info-item">
            <strong>Email:</strong> <a href="mailto:tejanarra@email.com">tejanarra@email.com</a>
          </div>
          <div className="info-item">
            <strong>Phone:</strong> +1 234 567 890
          </div>
          <div className="info-item">
            <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/tejanarra/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
          </div>
          <div className="info-item">
            <strong>GitHub:</strong> <a href="https://github.com/tejanarra" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;