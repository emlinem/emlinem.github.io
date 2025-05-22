// src/sections/Projects.jsx
import React, { useState } from 'react';
import Typography from '../components/Typography';
import './work.css';
import projectsData from './projectsData';

export default function Projects() {
const [selectedProject, setSelectedProject] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleCardClick = (project) => {
    setScrollPosition(window.scrollY);
    setSelectedProject(project);
    setCarouselIndex(0);
    document.body.classList.add('no-scroll');
  };

  const closePopup = () => {
    setSelectedProject(null);
    document.body.classList.remove('no-scroll');
    window.scrollTo(0, scrollPosition);
  };

  return (
    <section id="projects" className="work-section">
      <Typography type="h1" color="primary">
        UX/UI Design
      </Typography>

      <div className="work-grid">
        {projectsData.map((work) => (
          <div
            key={work.id}
            className="work-card-container"
            onClick={() => handleCardClick(work)}
          >
            <div className="work-card">
              <img src={work.img} alt={work.name} />

              {/* ——— Hover overlay ——— */}
              <div className="card-hover">
                <Typography type="h2" className="hover-title">
                  {work.name}
                </Typography>
                {work.description && (
                  <Typography type="p" className="hover-desc">
                    {work.description}
                  </Typography>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ——— Popup for selected project ——— */}
      {selectedProject && (
        <div className="popup-overlay" onClick={closePopup}>
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={closePopup}>
              ×
            </button>

            <div className="popup-inner">
              {/* LEFT: Carousel */}
              <div className="carousel-container">
                <button
                  className="carousel-btn prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    const count = 1 + (selectedProject.extraImages?.length || 0);
                    setCarouselIndex(i => (i - 1 + count) % count);
                  }}
                >
                  ‹
                </button>

                {(() => {
                  const slides = [
                    selectedProject.img,
                    ...(selectedProject.extraImages || []),
                  ];
                  return (
                    <>
                      <img
                        key={carouselIndex}                   
                        className="carousel-image"
                        src={slides[carouselIndex]}
                        alt={`${selectedProject.name} slide ${carouselIndex + 1}`}
                      />
                      <div className="carousel-indicators">
                        {slides.map((_, idx) => (
                          <span
                            key={idx}
                            className={idx === carouselIndex ? 'dot active' : 'dot'}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCarouselIndex(idx);
                            }}
                          />
                        ))}
                      </div>
                    </>
                  );
                })()}

                <button
                  className="carousel-btn next"
                  onClick={(e) => {
                    e.stopPropagation();
                    const count = 1 + (selectedProject.extraImages?.length || 0);
                    setCarouselIndex(i => (i + 1) % count);
                  }}
                >
                  ›
                </button>
              </div>

              {/* RIGHT: Details */}
              <div className="popup-details">
                <Typography type="h1" color="primary">
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

                {selectedProject.links?.length > 0 && (
                  <div className="popup-links">
                    {selectedProject.links.map((url, idx) => (
                      <a
                        key={idx}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-link"
                      >
                        <Typography type="p2" color="primary">
                          {selectedProject.linkname[idx]} <span className="arrow">→</span>
                        </Typography>
                      </a>
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