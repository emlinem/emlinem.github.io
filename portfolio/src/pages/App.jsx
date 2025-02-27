import React from 'react';
import '../styles.css';
import Header from './header';
import Hero from './Hero';
import Contact from './Contact';
import Graphics from './graphics';
import Projects from './projects';
import About from './about';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Header />
            <Hero />
            <About />
            <Graphics />
            <Projects />
            <Contact />
        </Router>
    );
}

export default App;
