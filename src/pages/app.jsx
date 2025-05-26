import React from 'react';
import '../styles.css';
import Header from './header';
import Hero from './hero';
import Contact from './contact';
import Graphics from './graphics';
import Projects from './projects';
import Resume from './resume';
import About from './about';
import Products from './products';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div id="top"></div>
            <Header />
            <Hero />
            <Resume />
            <Projects />
            <Graphics />
            <Products />
            <About />
            <Contact />
        </Router>
    );
}

export default App;
