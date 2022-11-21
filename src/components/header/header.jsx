import React from 'react';
import Me from '../../assets/jarrel-full.png';
import CTA from './cta';
import './header.css';
import headersocials from './headersocials';

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Jarrel Thomas</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <headersocials />
      </div>
    </header>
  );
};

export default header;
