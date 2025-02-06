import React from 'react';
import '../styles.css';
import Header from './header';
import Hero from './Hero';
import Footer from '../components/Footer';
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
            <Footer />
        </Router>
    );
}

export default App;
