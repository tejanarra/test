import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typewriter from 'typewriter-effect';
import './Styles/Hero.css'; // Ensure this file exists and includes necessary styles

const Hero = () => {
  return (
    <section id="hero" className="hero d-flex align-items-center text-light">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Content on the left */}
        <div className="text-left">
          <h1 className="display-4 fw-bold mb-4">Hi, I'm Teja Narra</h1>
          <p className="lead mb-4">
            I'm a passionate&nbsp;
            <Typewriter
              options={{
                strings: [
                  'Full Stack Developer',
                  'Software Engineer',
                  'Computer Science Graduate',
                  'Graduate Teaching Assistant',
                ],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </p>
          <p className="lead">
            With a strong foundation in building scalable and efficient web applications, I focus on creating intuitive user experiences and embracing the latest technologies to drive innovation. I am continuously learning, adapting, and exploring new ways to improve my skills and deliver impactful results.
          </p>
        </div>

        {/* Image on the right */}
        <div className="image-container">
          <img
            src="./DSC_1145.jpg"
            alt="Teja Narra"
            className="rounded-3 hero-img"  // rectangle shape
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;