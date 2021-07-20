import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {

    const history = useHistory();
    
    return (
        <div className='hero-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <h1>Full Stack Development</h1>
            <p>What can I build for you?</p>
            <div className="hero-btns">
                <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                onClick={()=>history.push('/projects')}
                >
                    Projects
                </Button>
                <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                onClick={()=>history.push('/about')}
                >
                    About Me
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
