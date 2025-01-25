import React from 'react';
import '../styles.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Graphics from '../components/Graphics';
import { BrowserRouter as Router } from 'react-router-dom';
import Contact from '../pages/Contact';

function App() {
    return (
        <Router>
            <Header />
            <Hero />
            <Graphics />
            <Projects />
            <Footer />
        </Router>
    );
}

export default App;
