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
              <small>2+ Years</small>
            </article>
            <article className="about__card">
              <BsCodeSlash className="about__icon" />
              <h5>Technologies</h5>
              <small>HTML5 | CSS3 | Javascript</small>
            </article>
            <article className="about__card">
              <BsFolderFill className="about__icon" />
              <h5>Projects</h5>
              <small>10 Solid Projects</small>
            </article>
          </div>

          <p>
            Nulla commodo cupidatat excepteur ullamco esse. Dolore minim amet do
            sit velit eu sint enim cillum. Eu cillum tempor consequat anim magna
            elit veniam culpa qui. Do tempor ad qui incididunt sit amet fugiat
            laboris esse laboris excepteur exercitation sint reprehenderit.
            Aliquip voluptate pariatur consectetur deserunt eu elit eu irure
            deserunt ex.
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
