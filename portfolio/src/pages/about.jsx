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
                        <Typography type="h4" color="primary">Masters's in Interactive Media Technology</Typography> 
                        <Typography type="date" color="primary">2022 - Present</Typography>
                        <Typography type="p" color="primary">Human Computer Interaction with a focus on UX & UI.</Typography> 
                    </div>

                    <div className="item">
                        <Typography type="h4" color="primary">Bachelor's in Media Technology</Typography> 
                        <Typography type="date" color="primary">2019 - 2022</Typography>
                        <Typography type="p" color="primary">Relevant courses in UX/UI Design and Web Development</Typography>
                    </div>

                    <button className="cta-btn">Download Resume</button>
                </div>

                {/* Experience Column */}
                <div className="experience">
                    <Typography type="h2" color="primary">Experience</Typography> 

                    <div className="item">
                        <Typography type="h4" color="primary">UX Designer Intern at XYZ Company</Typography> 
                        <Typography type="date" color="primary">2019 - 2022</Typography>
                        <Typography type="p" color="primary">Worked on responsive web designs and interactive prototypes.</Typography>
                    </div>

                    <div className="item">
                        <Typography type="h4" color="primary">UX Designer Intern at XYZ Company</Typography> 
                        <Typography type="date" color="primary">2019 - 2022</Typography>
                        <Typography type="p" color="primary">Worked on responsive web designs and interactive prototypes.</Typography>
                    </div>

                    <div className="item">
                        <Typography type="h4" color="primary">UX Designer Intern at XYZ Company</Typography> 
                        <Typography type="date" color="primary">2019 - 2022</Typography>
                        <Typography type="p" color="primary">Worked on responsive web designs and interactive prototypes.</Typography>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
