import React from 'react';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const headersocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/jarrel-thomas/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/Organic-Species"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithubSquare />
      </a>
      <a
        href="https://twitter.com/OrganicSpecies"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitterSquare />
      </a>
    </div>
  );
};

export default headersocials;
