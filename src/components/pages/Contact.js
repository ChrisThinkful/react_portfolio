import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

function Contact() {
    return (
        <>  
            <div className="contact">
                <div className="contact-details">
                    <div className="contact-header">
                        Contact
                    </div>
                    <div className="contact-text">
                        Ways To Connect With Me
                    </div>
                </div>
                <div className="contact-media">
                    <Link to='/' className="contact-links"><i class="fab fa-linkedin"/>&nbsp;LinkedIn</Link>
                    <Link to='/' className="contact-links"><i class="fab fa-github-square"/>&nbsp;GitHub</Link>
                    <Link to='/' className="contact-links"><i class="fas fa-envelope-square"/>&nbsp;Email</Link>
                </div>
            </div>
        </>
    )
}

export default Contact
