import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-overlay"></div>
            <div className="hero-content text-center">
                <h1>Kings Praise Church</h1>
                <p>"Let everything that has breath praise the Lord." — Psalm 150:6</p>
                <div className="hero-btns">
                    <Link to="/services" className="btn btn-primary btn-large">Join Us for Worship</Link>
                    <Link to="/sermons" className="btn btn-outline btn-large">Watch Live</Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
