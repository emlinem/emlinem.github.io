// src/sections/About.jsx
import React from 'react';
import Typography from '../components/Typography';
import './about.css';
import EmilyAbout from '../assets/EmilyAbout.jpg';
import { FaEnvelope } from 'react-icons/fa';


export default function About() {
  const skills = ['Figma', 'React', 'TypeScript', 'Illustrator', 'CSS'];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* LEFT: Text */}
        <div className="about-text">
          <Typography type="p2" className="about-pretitle">
            GET TO KNOW ME
          </Typography>
          <Typography type="h1" className="about-title">
            Emily Nilsson
          </Typography>
          <Typography type="p2" className="about-subtitle">
            Crafting user experiences with heart and code
          </Typography>

          <div className="about-bio">
            <Typography type="p" className="about-paragraph">
              Hej! I’m a UX/UI designer & front-end dev who believes that
              the best interfaces are the ones you don’t notice until they
              delight you.
            </Typography>
            <Typography type="p" className="about-paragraph">
              Whether I’m mapping user flows or pixel-pushing in Figma,
              my goal is the same: turn research into interfaces that feel
              effortless, whimsical, and unequivocally “you.”
            </Typography>
            <Typography type="p" className="about-paragraph">
              Off-duty, I hunt for coffee-shop inspiration, sketch with
              watercolor, or plan my next adventure, because a fresh perspective
              is the secret to better design.
            </Typography>
          </div>

          {/* Skills */}
          <div className="skills-list">
            {skills.map((skill) => (
              <Typography key={skill} type="p2" color="white" className="skill-tag">
                {skill}
              </Typography>
            ))}
          </div>

          {/* Call to Action: using your .cta-btn and Typography */}
          <a
            href="mailto:emily.r.nilsson@gmail.com"
            target="_blank"
            className="email-link"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <button className="cta-btn"><FaEnvelope style={{ marginRight: '8px' }} />Let's chat!</button>
          </a>
        </div>

        {/* RIGHT: Image */}
        <div className="about-image">
          <img src={EmilyAbout} alt="Portrait of Emily Nilsson" />
        </div>
      </div>
    </section>
  );
}
