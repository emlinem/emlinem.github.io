import React from 'react';
import "../styles.css";
import Emily from '../assets/Emily.png';

const Hero = () => {
    return (
        <section className="hero">
            <div className="content">
                <h1>creative designer <br /> & developer.</h1>
                <p>Hi I'm Emily Nilsson, a passionate Front-end Developer & UI/UX Designer based in Stockholm.</p>
                <a href="#works" className="cta-btn">SEE MY WORKS →</a>
            </div>
            <div className="hero-image">
                <img src={Emily} alt="Emily Image" />
            </div>
        </section>
    );
}

export default Hero;
