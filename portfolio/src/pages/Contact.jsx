import React from 'react';
import './contact.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Typography from '../components/Typography';

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="simple-contact">
      <Typography type="h1" className="name-year">
        Emily Nilsson, {currentYear}
      </Typography>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/nilssonemily"
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
        <a
          href="mailto:emily.r.nilsson@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}
