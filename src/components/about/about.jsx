import React from 'react';
import { BsCodeSlash, BsFillBarChartFill, BsFolderFill } from 'react-icons/bs';
import ME from '../../assets/Jarrel-plain.jpg';
import './about.css';

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsFillBarChartFill className="about__icon" />
              <h5>Experince</h5>
              <small>1+ Years</small>
            </article>
            <article className="about__card">
              <BsCodeSlash className="about__icon" />
              <h5>Technologies</h5>
              <small>HTML5 | CSS3 | Javascript</small>
            </article>
            <article className="about__card">
              <BsFolderFill className="about__icon" />
              <h5>Projects</h5>
              <small>2 Solid Projects</small>
            </article>
          </div>

          <p>
            I have an immense passion and natural eye for design which continues
            to inspire and delight others around me. My ideas always come from
            the world I take in and I greatly enjoy studying and meditating on
            the simple beauty of design. I'm a fast learner and can handle
            taking on new skills and juggling a variety of projects at once.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
