import React from 'react';
import { BsEnvelope, BsLinkedin, BsTwitter } from 'react-icons/bs';
import './contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BsEnvelope className="contact__option-icon" />
            <h4>Email</h4>
            <h5>jarrel.thomas@gmail.com</h5>
            <a
              href="mailto:jarrel.thomas@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Jarrel Thomas</h5>
            <a
              href="https://www.linkedin.com/in/jarrel-thomas/"
              target="_blank"
              rel="noreferrer"
            >
              Connect with Me
            </a>
          </article>
          <article className="contact__option">
            <BsTwitter className="contact__option-icon" />
            <h4>Twitter</h4>
            <h5>OrganicSpecies</h5>
            <a
              href="https://twitter.com/OrganicSpecies"
              target="_blank"
              rel="noreferrer"
            >
              Follow Me
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
