import React, { useState } from 'react';
import {
  FaBook,
  FaEnvelope,
  FaHome,
  FaLaptopCode,
  FaUser,
} from 'react-icons/fa';
import './nav.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <FaHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <FaUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experince')}
        className={activeNav === '#experince' ? 'active' : ''}
      >
        <FaBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <FaLaptopCode />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <FaEnvelope />
      </a>
    </nav>
  );
};

export default Nav;
