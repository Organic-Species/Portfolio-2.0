import React from 'react';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import './footer.css';

const footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Jreal
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#exp">Expeirience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/jarrel-thomas/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Organic-Species">
          <FaGithubSquare />
        </a>
        <a href="https://twitter.com/OrganicSpecies">
          <FaTwitterSquare />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Jarrel Thomas. All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default footer;
