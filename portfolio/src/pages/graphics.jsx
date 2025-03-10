import React, { useState } from 'react';
import Typography from '../components/Typography';
import '../components/Typography.css';
import './work.css';
import graphicsData from './graphicsData';

function Graphics() {
    const [expandedCard, setExpandedCard] = useState(null);

    const handleCardClick = (projectId) => {
        setExpandedCard((prevId) => (prevId === projectId ? null : projectId));
    };

    return (
        <section id="graphics" className="work-section">
            <Typography type="h2" color="primary">Graphics Projects</Typography>
            <div className="work-grid">
                {graphicsData.map((work) => (
                    <div
                        className={`work-card-container ${expandedCard === work.id ? 'expanded' : ''}`}
                        key={work.id}
                    >
                        <div className="work-card" onClick={() => handleCardClick(work.id)}>
                            <img src={work.img} alt={work.name} />
                            <div className="overlay-content">
                                <h3>{work.name}</h3>
                            </div>
                        </div>
                        {expandedCard === work.id && (
                            <div className="expanded-content">
                                <Typography type="h2" color="primary">{work.name}</Typography>
                                {work.date && <Typography type="date" color="primary">{work.date}</Typography>}
                                <Typography type="p" color="primary">{work.details}</Typography>
                                {work.tools && (
                                    <div>
                                        <Typography type="p2" color="primary" className="tools-title">Tools Used:</Typography>
                                        <div className="tools-container">
                                            {work.tools.map((tool, index) => (
                                                <span key={index} className="tool-tag">{tool}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                <div className="card-links">
                                    {work.links.length > 0 && work.links.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="card-link"
                                        >
                                            <Typography type="p" color="primary">
                                                {work.linkname[index]}
                                                <span className="arrow">→</span>
                                            </Typography>
                                        </a>
                                    ))}
                                </div>
                                <div className="expanded-images">
                                    <img className="main-image" src={work.img} alt={work.name} />
                                    <div className="small-images">
                                        {work.extraImages.map((image, index) => (
                                            <img key={index} src={image} alt={`Extra ${index + 1}`} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Graphics;
