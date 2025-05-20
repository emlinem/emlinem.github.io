
import React, { useState } from 'react';
import Typography from '../components/Typography';
import './work.css';
import graphicsData from './graphicsData';

export default function Graphics() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleCardClick = (project) => {
    setScrollPosition(window.scrollY);
    setSelectedProject(project);
    document.body.classList.add('no-scroll');
  };

  const closePopup = () => {
    setSelectedProject(null);
    document.body.classList.remove('no-scroll');
    window.scrollTo(0, scrollPosition);
  };

  return (
    <section id="graphics" className="work-section">
      <Typography type="h2" color="primary">
        Graphic Design work
      </Typography>

      <div className="work-grid">
        {graphicsData.map((work) => (
          <div
            key={work.id}
            className="work-card-container"
            onClick={() => handleCardClick(work)}
          >
            {/* Image */}
            <div className="work-card">
              <img src={work.img} alt={work.name} />
            </div>

            {/* Always‐visible info below */}
            <div className="card-info">
              {work.name && (
                <Typography type="h4" color="primary">
                  {work.name}
                </Typography>
              )}
              {work.description && (
                <Typography type="p2" color="primary">
                  {work.description}
                </Typography>
              )}

              {/* Footer: “Read more” and share icon */}
              <div className="card-links">
                {work.links[0] && (
                  <a
                    href={work.links[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link read-more"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Typography type="p2" color="primary">
                      Read more <span className="arrow">→</span>
                    </Typography>
                  </a>
                )}
                <a
                  href="#"
                  className="card-link share"
                  onClick={(e) => {
                    e.stopPropagation();
                    // your share logic here
                  }}
                >
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Overlay */}
      {selectedProject && (
        <div className="popup-overlay" onClick={closePopup}>
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="popup-inner">
              <button className="close-btn" onClick={closePopup}>
                ×
              </button>

              {/* Left: Large image */}
              <img
                className="popup-main-image"
                src={selectedProject.img}
                alt={selectedProject.name}
              />

              {/* Right: Details */}
              <div className="popup-details">
                <Typography type="h2" color="primary">
                  {selectedProject.name}
                </Typography>

                {selectedProject.date && (
                  <Typography type="date" color="primary">
                    {selectedProject.date}
                  </Typography>
                )}

                <Typography type="p" color="primary">
                  {selectedProject.details || selectedProject.description}
                </Typography>

                {selectedProject.tools && (
                  <>
                    <Typography type="p2" color="primary">
                      Tools Used:
                    </Typography>
                    <div className="tools-container">
                      {selectedProject.tools.map((tool, idx) => (
                        <span key={idx} className="tool-tag">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </>
                )}

                {selectedProject.extraImages?.length > 0 && (
                  <div className="popup-small-images">
                    {selectedProject.extraImages.map((src, idx) => (
                      <img key={idx} src={src} alt="" />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
