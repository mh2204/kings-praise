import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import PastorSection from '../components/PastorSection';
import './Home.css';
import '../components/PastorSection.css';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />

            <section className="section intro-section container text-center">
                <h2>Welcome to Kings Praise Church</h2>
                <p className="lead-text">
                    “A Place of Joyful Worship and Grace — Connecting Hearts, Transforming Lives.”
                </p>
                <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
                    Welcome to Kings Praise Church — a place where hearts are lifted, lives are transformed, and Jesus is exalted.
                    Join us as we grow together in faith and fellowship.
                </p>
            </section>

            <PastorSection />

            <section className="section services-section bg-secondary">
                <div className="container text-center">
                    <h2>Service Times</h2>
                    <div className="service-grid">
                        <div className="service-card">
                            <h3>Sunday Worship</h3>
                            <p className="time">12:00 PM – 1:00 PM</p>
                            <p className="service-desc">Join us for a powerful time of praise and word.</p>
                        </div>
                        <div className="service-card">
                            <h3>Wednesday Service</h3>
                            <p className="time">5:00 PM – 7:00 PM</p>
                            <p className="service-desc">Mid-week prayer and bible study.</p>
                        </div>
                        <div className="service-card">
                            <h3>Friday Service</h3>
                            <p className="time">5:00 PM – 7:00 PM</p>
                            <p className="service-desc">Evening worship and fellowship.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section highlights-section container">
                <h2 className="text-center">Latest Updates</h2>
                <div className="highlights-grid">
                    <div className="highlight-card">
                        <h3>About Us</h3>
                        <p>Learn more about our mission, belief, and pastoral leadership.</p>
                        <Link to="/about" className="btn btn-outline">Read More</Link>
                    </div>
                    <div className="highlight-card">
                        <h3>Upcoming Events</h3>
                        <p>Check out what's happening at Kings Praise Church.</p>
                        <Link to="/services" className="btn btn-outline">View Events</Link>
                    </div>
                    <div className="highlight-card">
                        <h3>Latest Sermon</h3>
                        <p>Catch up on our most recent message online.</p>
                        <Link to="/sermons" className="btn btn-outline">Watch Now</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
