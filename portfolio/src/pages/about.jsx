import React from 'react';
import Typography from '../components/Typography';
import './about.css';
import EmilyAbout from '../assets/EmilyAbout.jpg';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* LEFT: Text */}
        <div className="about-text">
          <Typography type="h2" className="about-pretitle">
            Meet
          </Typography>
          <Typography type="h1" className="about-title">
            Emily Nilsson
          </Typography>
          <Typography type="p2" className="about-subtitle">
            The coolest kid on the block
          </Typography>

          <div className="about-bio">
            <Typography type="p" className="about-paragraph">
              Hejs svejs! I’m a UX/UI designer who believes in crafting experiences that feel as
              delightful to use as they are to look at.
            </Typography>
            <Typography type="p" className="about-paragraph">
              Over the last few years, I’ve specialized in translating user
              insights into clean, intuitive interfaces—whether it’s a web app,
              a mobile experience, or an interactive installation.
            </Typography>
            <Typography type="p" className="about-paragraph">
              When I’m not pixel-pushing, you’ll find me illustrating in coffee
              shops, hunting for design inspo in unexpected places, or sipping
              hot chocolate while planning my next creative adventure.
            </Typography>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="about-image">
          <img
            src={EmilyAbout}
            alt="A portrait of Emily"
          />
        </div>
      </div>
    </section>
  );
}
