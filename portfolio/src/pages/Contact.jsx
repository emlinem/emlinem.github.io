import React from 'react';
import './contact.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="simple-contact">
      <h2 className="name-year">Emily Nilsson, {currentYear}</h2>

      <div className="social-icons">
        <a
          href="www.linkedin.com/in/nilssonemily"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/emlinem"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>

      <a href="mailto:emily.r.nilsson@gmail.com" className="email-link">
        emily.r.nilsson@gmail.com
      </a>
    </section>
  );
}
