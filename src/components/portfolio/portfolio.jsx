import React from 'react';
import IMG2 from '../../assets/pexels-picjumbocom-196645 (1).jpg';
import IMG3 from '../../assets/pexels-picjumbocom-196645 (2).jpg';
import IMG4 from '../../assets/pexels-picjumbocom-196645 (3).jpg';
import IMG5 from '../../assets/pexels-picjumbocom-196645 (4).jpg';
import IMG1 from '../../assets/pexels-picjumbocom-196645.jpg';
import './portfolio.css';

// DO NOT USE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Just another website',
    github: 'https://github.com',
    demo: 'http://loftart.epizy.com/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Just another website',
    github: 'https://github.com',
    demo: 'http://loftart.epizy.com/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Just another website',
    github: 'https://github.com',
    demo: 'http://loftart.epizy.com/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Just another website',
    github: 'https://github.com',
    demo: 'http://loftart.epizy.com/',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
