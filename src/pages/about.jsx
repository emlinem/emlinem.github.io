import React from 'react';
import Typography from '../components/Typography';
import './about.css';
import AboutPic from '../assets/AboutPic.png';
import { FaEnvelope } from 'react-icons/fa';

export default function About() {
  const skills = ['Figma', 'React', 'TypeScript', 'Illustrator', 'CSS'];
  const bulletPoints = [
    'In the kitchen testing yet another pasta hack and pretending the smoke alarm is a timer.',
    'On my computer playing The Sims and micromanaging virtual lives while avoiding my own laundry pile.',
    'In the group chat planning the next party, dinner theme, or weekend getaway for my friends (someone’s gotta keep the spreadsheets tidy).',
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* LEFT: Text */}
        <div className="about-text">
          <Typography type="h2" className="about-pretitle">
            GET TO KNOW ME
          </Typography>
          <Typography type="h1" className="about-title">
            Emily Nilsson
          </Typography>
          <Typography type="h2" className="about-subtitle">
            Crafting user experiences with heart and code
          </Typography>

          <div className="about-bio">
            <Typography type="p" className="about-paragraph">
              Hey there! I’m Emily, a soon-to-graduate master’s student in Interactive Media Technology at KTH who likes turning clunky screens into smooth, “oh-that-makes-sense” moments.
            </Typography>
            <Typography type="p" className="about-paragraph">
              When I close Figma, you’ll usually find me in one of three places:
            </Typography>
            <ul className="about-bullet-list">
              {bulletPoints.map((point) => (
                <li key={point} className="about-bullet-item">
                  <Typography type="p" className="about-paragraph">
                    {point}
                  </Typography>
                </li>
              ))}
            </ul>
            <Typography type="p" className="about-paragraph">
              All those side quests teach me patience, planning, and a dash of playful chaos, which is exactly what I pour into every UX project. If you’re into crafting experiences that feel a little more human, let’s talk!
            </Typography>
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
          <img src={AboutPic} alt="Portrait of Emily Nilsson" />
        </div>
      </div>
    </section>
  );
}
