import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-scroll'; // import Link from react-scroll
import './Styles/Header.css'; // Ensure this path is correct

const Header = () => {
  return (
    <header className="bg-transparent text-light py-3 fixed-top">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center">
          <a
            href="/"
            className="d-flex align-items-center text-decoration-none text-light"
          >
            <img
              src="./DSC_1145.jpg"
              alt="Teja Narra"
              className="rounded-circle me-2"
              style={{ width: "40px", height: "40px" }}
            />
          </a>

          <ul className="nav">
            <li className="nav-item">
              <Link
                to="hero"
                className="nav-link text-light"
                smooth={true}
                duration={500}
                offset={-70} // Adjust offset for fixed header
                activeClass="active-link"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                className="nav-link text-light"
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active-link"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="resume"
                className="nav-link text-light"
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active-link"
              >
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projects"
                className="nav-link text-light"
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active-link"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                className="nav-link text-light"
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active-link"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;