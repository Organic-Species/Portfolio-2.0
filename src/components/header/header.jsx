import React from 'react';
import Me from '../../assets/jarrel-full.png';
import CTA from './cta';
import './header.css';
import headersocials from './headersocials';

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <div className="header_text">
          <h1>Hello, I'm Jarrel Thomas</h1>
          <h3>Front-End Developer | Web Designer</h3>
          <p className="text-light">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <CTA />
        <headersocials />
      </div>
    </header>
  );
};

export default header;
