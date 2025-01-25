import React from 'react';
import "../styles.css";

// Import images statically
import DinnerClubImg from '../assets/DINNERCLUB.png';
import KollinPosterImg from '../assets/Kollin Poster@2x.png';
import OrbitImg from '../assets/Orbit IG1@4x.png';

const Projects = () => {
    const projects = [
        { id: 1, title: 'Dinner Club', description: 'An invitation for Dinner Club.', img: DinnerClubImg },
        { id: 2, title: 'Kollin Poster', description: 'A poster for a Kollin survey.', img: KollinPosterImg },
        { id: 3, title: 'Orbit', description: 'An instagram post for Orbit Career Fair.', img: OrbitImg }
    ];

    return (
        <section className="projects" id="works">
            <h2>Crafted with love.</h2>
            <p>These are a selection of my recent works.</p>
            <div className="project-list">
                {projects.map((project) => (
                    <a key={project.id} href="#" className="project">
                        <img src={project.img} alt={project.title} />
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Projects;
