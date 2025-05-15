import React from 'react';
import "./header.css";

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><a href="#about">about</a></li>
                    <li><a href="#graphics">graphics</a></li>
                    <li><a href="#projects">projects</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
