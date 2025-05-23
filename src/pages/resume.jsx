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
                I'm in the last year of my Master's in Interactive Media Technology at KTH, where I get to dive deep into UX and interaction design, combining creativity, technology, and user insight to craft engaging and meaningful digital experiences.
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
                I have a Bachelor's degree in Media Technology from KTH, where I had a great time exploring the exciting mix of technology, design, and user experience to create fun and innovative digital solutions.
              </Typography>
            </div>
          </div>

          <a
            className="cta-btn"
            href="/resume.pdf" 
            download="Emily-Nilsson-Resume.pdf"
          >
            Download Resume
          </a>

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
                I led Kollin’s website refresh, managing a small UX team, conducting user surveys and interviews, and redesigning key pages to boost customer satisfaction and improve the overall user experience.
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
                I created the logo and branding for ORBIT, the KTH Space Center and THS career fair, giving the event a bold visual identity that reflects its focus on innovation and exploration.
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
                I led a small team of graphic designers and created both physical and digital marketing materials, ensuring a cohesive and eye-catching visual presence across all channels.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
