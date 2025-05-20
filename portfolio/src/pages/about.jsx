import React from 'react';
import './about.css';
import '../styles.css';
import Typography from '../components/Typography';
import '../styles.css';

function About() {
    return (
        <section id="about" className="about">
            <div className="about-grid">
                {/* Education Column */}
                <div className="education">
                    <Typography type="h2" color="primary">Education</Typography> 

                    <div className="item">
                        <Typography type="h4" color="primary">Masters in Interactive Media Technology</Typography> 
                        <Typography type="date" color="primary">2022 - Present</Typography>
                        <Typography type="p" color="primary">Human Computer Interaction with a focus on UX & UI.</Typography> 
                    </div>

                    <div className="item">
                        <Typography type="h4" color="primary">Bachelors in Media Technology</Typography> 
                        <Typography type="date" color="primary">2019 - 2022</Typography>
                        <Typography type="p" color="primary">Relevant courses in UX/UI Design and Web Development</Typography>
                    </div>

                    <button className="cta-btn">Download Resume</button>
                </div>

                {/* Experience Column */}
                <div className="experience">
                    <Typography type="h2" color="primary">Experience</Typography> 

                    <div className="item">
                        <Typography type="h4" color="primary">Senior UX Designer - Kollin</Typography> 
                        <Typography type="date" color="primary">2024</Typography>
                        <Typography type="p" color="primary">Led Kollin’s website refresh: managed a small UX team, ran user surveys and interviews, and redesigned key pages to elevate customer satisfaction. </Typography>
                    </div>

                    <div className="item">
                        <Typography type="h4" color="primary">Graphic Designer - Orbit Career Fair</Typography> 
                        <Typography type="date" color="primary">2024</Typography>
                        <Typography type="p" color="primary">Created the logo and branding for the KTH SPace Center and THS career fair.</Typography>
                    </div>

                    <div className="item">
                        <Typography type="h4" color="primary">Graphic Designer - THS Armada</Typography> 
                        <Typography type="date" color="primary">2019 - 2022</Typography>
                        <Typography type="p" color="primary">Led a small team of graphic designers, designed both physical and digital marketing materials.</Typography>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
