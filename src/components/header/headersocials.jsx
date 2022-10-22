import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

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
      ></a>
      <a
        href="https://twitter.com/OrganicSpecies"
        target="_blank"
        rel="noreferrer"
      ></a>
    </div>
  );
};

export default headersocials;
