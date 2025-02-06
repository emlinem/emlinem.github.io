import React from 'react';
import '../styles.css';
import './hero.css';
import Emily from '../assets/Emily.png';
import Typography from '../components/Typography';

const Hero = () => {
    return (
        <section className="hero">
            <div className="content">
                <div className='herocontent'>
                <Typography type="hero" color="primary">
                    creative designer & developer.
                </Typography>
                <Typography type="p" color="primary">
                    Hi I'm Emily Nilsson, a passionate Front-end Developer & UI/UX Designer based in Stockholm.
                </Typography>
                <a href="#works" className="cta-btn">SEE MY WORKS →</a>
                </div>
            </div>
            <div className="hero-image">
                <img src={Emily} alt="Emily Image" />
            </div>
        </section>
    );
}

export default Hero;
