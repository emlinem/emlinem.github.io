import React from 'react';
import '../styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">

            <div className="contact-section">
                <h3>Let's work together!</h3>
                <p>I'm available for freelance work.</p>
                <Link to="/contact" className="contact-btn">
                    SAY HELLO →
                </Link>
            </div>
            
            <div className="social-links">
                <a href="https://github.com/emlinem" aria-label="GitHub">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/nilssonemily/" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
            </div>

            <p>© 2025 Emily Nilsson</p>

            <div className="scroll-top">
                <a href="#top" className="scroll-link">TOP</a>
            </div>
        </footer>
    );
};

export default Footer;
