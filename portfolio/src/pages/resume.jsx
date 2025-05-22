// src/sections/Resume.jsx
import React from 'react';
import './resume.css';
import '../styles.css';
import Typography from '../components/Typography';

function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="resume-grid">
        {/* Education Column */}
        <div className="column education">
          <div className="section-header">
            <Typography type="h1" color="primary">Education</Typography>
          </div>

          <div className="item">
            <div className="item-content">
              <Typography type="h2" color="primary">
                Masters in Interactive Media Technology
              </Typography>
              <Typography type="date" color="secondary">
                2022 – Present
              </Typography>
              <Typography type="p" color="primary">
                Human Computer Interaction with a focus on UX &amp; UI.
              </Typography>
            </div>
          </div>

          <div className="item">
            <div className="item-content">
              <Typography type="h2" color="primary">
                Bachelors in Media Technology
              </Typography>
              <Typography type="date" color="secondary">
                2019 – 2022
              </Typography>
              <Typography type="p" color="primary">
                Relevant courses in UX/UI Design and Web Development.
              </Typography>
            </div>
          </div>

          <button className="cta-btn">Download Resume</button>
        </div>

        {/* Experience Column */}
        <div className="column experience">
          <div className="section-header">
            <Typography type="h1" color="primary">Experience</Typography>
          </div>

          <div className="item">
            <div className="item-content">
              <Typography type="h2" color="primary">
                Senior UX Designer – Kollin
              </Typography>
              <Typography type="date" color="secondary">
                2024
              </Typography>
              <Typography type="p" color="primary">
                Led Kollin’s website refresh: managed a small UX team, ran user
                surveys and interviews, and redesigned key pages to elevate customer
                satisfaction.
              </Typography>
            </div>
          </div>

          <div className="item">
            <div className="item-content">
              <Typography type="h2" color="primary">
                Graphic Designer – Orbit Career Fair
              </Typography>
              <Typography type="date" color="secondary">
                2024
              </Typography>
              <Typography type="p" color="primary">
                Created the logo and branding for the KTH Space Center and THS career fair.
              </Typography>
            </div>
          </div>

          <div className="item">
            <div className="item-content">
              <Typography type="h2" color="primary">
                Graphic Designer – THS Armada
              </Typography>
              <Typography type="date" color="secondary">
                2019 – 2022
              </Typography>
              <Typography type="p" color="primary">
                Led a small team of graphic designers, designed both physical and digital marketing materials.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
