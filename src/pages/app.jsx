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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UXUIProjectsPage from './uxui-projects';
import ProjectDetailPage from '../components/ProjectDetailPage';

function App() {
    return (
        <Router>
            <div id="top"></div>
            <Header />
            <Routes>
                <Route path="/" element={
                    <>
                        <Hero />
                        <Resume />
                        <Projects />
                        <Graphics />
                        <Products />
                        <About />
                        <Contact />
                    </>
                } />
                <Route path="/uxui-projects" element={<UXUIProjectsPage />} />
                <Route path="/project/:id" element={<ProjectDetailPage />} />
            </Routes>
        </Router>
    );
}

export default App;
