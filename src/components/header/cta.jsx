import React from 'react';
import Resume from '../../assets/Jarrel_Resume_2022.pdf';

const cta = () => {
  return (
    <div className="cta">
      <a href={Resume} className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Chat
      </a>
    </div>
  );
};

export default cta;
