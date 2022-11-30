import React from 'react';
import Logo from '../../assets/logo-main.png';
import CTA from './cta';
import './header.css';

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <div className="header_text">
          <h1>Hello, I'm Jarrel Thomas</h1>
          <h3>Front-End Developer | Web Designer</h3>
          <p className="text-light">
            I am just starting on my coding journey as a devloper fueled by the
            love for design and the discipline of digital art. In beginning this
            journey I've aquired a wide range of experiences and knowledge in
            project management, entrepreneurship, front-end developer, ux
            design, music and color.
          </p>
          <CTA />
        </div>
      </div>
    </header>
  );
};

export default header;
