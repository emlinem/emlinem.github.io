import React, { useState, useEffect } from 'react';
import Typography from '../components/Typography';
import '../components/Typography.css';


import './work.css';
import graphicsData from './graphicsData';

function Graphics() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isClosing, setIsClosing] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    // Store scroll position before opening the popup
    const handleCardClick = (project) => {
        setScrollPosition(window.scrollY);
        setSelectedProject(project);
        document.body.classList.add("no-scroll");
    };

    // Smoothly close popup
    const closePopup = () => {
        setIsClosing(true);
        setTimeout(() => {
            setSelectedProject(null);
            setIsClosing(false);
            document.body.classList.remove("no-scroll");
            window.scrollTo(0, scrollPosition);
        }, 300); // Match transition duration
    };
        
    return (
        <section id="graphics" className="work-section">
            <Typography type="h2" color="primary">Graphics Projects</Typography>  {/* Using Typography for section heading */}
            <div className="work-grid">
                {graphicsData.map((work) => (
                    <div className="work-card-container" key={work.id}>
                        <div
                            className="work-card"
                            onClick={() => handleCardClick(work)}
                        >
                            <img src={work.img} alt={work.name} />
                        </div>

                        <div className="card-info">
                            {work.name && <Typography type="h3" color="primary">{work.name}</Typography>}
                            {work.date && <Typography type="date" color="primary" className="date">{work.date}</Typography>}
                            {work.description && <Typography type="p" color="primary">{work.description}</Typography>}

                            <div className="card-links">
                                {work.links.length > 0 && work.links.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="card-link"
                                    >
                                        <Typography type="p2" color="primary">
                                            {work.linkname[index]}
                                            <span className="arrow">→</span>
                                        </Typography>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Popup for selected project */}
            {selectedProject && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={closePopup}>×</button>

                        <div className="popup-left">
                            <div>
                                <Typography type="h2" color="primary">{selectedProject.name}</Typography>
                                {selectedProject.date && <Typography type="date" color="primary">{selectedProject.date}</Typography>}
                                <Typography type="p" color="primary">{selectedProject.details}</Typography>
                            </div>

                            {selectedProject.tools && (
                                <div>
                                    <Typography type="p2" color="primary" className="tools-title">Tools Used:</Typography>
                                    <div className="tools-container">
                                        {selectedProject.tools.map((tool, index) => (
                                            <span key={index} className="tool-tag">{tool}</span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Links section inside the popup */}
                            <div className="card-links">
                                {selectedProject.links.length > 0 && selectedProject.links.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="card-link"
                                    >
                                        <Typography type="p" color="primary">
                                            {selectedProject.linkname[index]}
                                            <span className="arrow">→</span>
                                        </Typography>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="popup-right">
                            <img
                                className="popup-main-image"
                                src={selectedProject.img}
                                alt={selectedProject.name}
                            />
                            <div className="popup-small-images">
                                {selectedProject.extraImages.map((image, index) => (
                                    <img key={index} src={image} alt={`Extra ${index + 1}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Graphics;
