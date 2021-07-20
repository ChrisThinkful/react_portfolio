import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

function About() {
    return (
        <div className="about">
            <div className="about-details">
                <div className="about-header">
                    About Me
                </div>
                <div className="about-subhead">
                    Chris Clark | Full Stack Software Engineer
                </div>
                <div className="about-container">
                    <div className="biography">
                    <p>My name is Chris and I am a Dallas, TX-based Full Stack Software Engineer/Web Developer. 
                        I graduated from Thinkful-Chegg's Software Engineering Immersion course in July of 2021. 
                        You can find my certificate of completion below. 
                        Thinkful graduates leave with such skills as Git/GitHub, JavaScript, HTML, CSS, React.js, 
                        Node.js, Express, and PostgreSQL. To develop these skills, the Thinkful course curriculum 
                        includes several&nbsp;
                        <Link to='/projects' className='biography-links' target='_blank'>projects</Link>
                        &nbsp;of increasing difficulty, and periodic mock interviews to test you 
                        in high-pressure situations. Since graduating, I am spending my time sharpening my skills by 
                        stretching myself to complete projects beyond the scope of my current capabilities and 
                        improving upon and refactoring my old projects to simplify and streamline concepts.
                    </p>
                    <p>
                    If you are interested in me or my work, please visit my&nbsp;
                    <Link to='/contact'className='biography-links' target='_blank'>contact</Link>
                    &nbsp;page for the best ways to reach me.
                    </p>
                    </div>
                    <div className="certificate">
                        <img src="images/Thinkful-Cert.jpg" alt="SWE Certification" className='responsive'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
