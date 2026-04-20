import React from 'react';
import './Pages.css';

const About = () => {
    return (
        <div className="page-container">
            <div className="page-header text-center">
                <h1>About Us</h1>
                <p>Discover who we are and what we believe.</p>
            </div>

            <section className="section container">
                <div className="about-content">
                    <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2>Our Vision</h2>
                        <p className="lead-text" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
                            To be a holistic centre for spiritual, physical and social empowerment.<br />
                            <span style={{ fontSize: '1rem', fontStyle: 'italic', color: '#666' }}>
                                "May God himself, the God of peace, sanctify you through and through.
                                May your whole spirit, soul and body be kept blameless at the coming of our LORD Jesus Christ."
                                — 1 Thessalonians 5:23
                            </span>
                        </p>

                        <h2 className="mt-4">Our Mission</h2>
                        <p className="lead-text" style={{ fontSize: '1.2rem' }}>
                            Making disciples of all nations and mobilizing both human and material resources towards achieving set goals in line with the vision.<br />
                            <span style={{ fontSize: '1rem', fontStyle: 'italic', color: '#666' }}>
                                "He said to them, 'Go into all the world and preach the good news to all creation.'"
                                — Mark 16:15
                            </span>
                        </p>
                    </div>

                    <div className="beliefs-section mt-4">
                        <h2 className="text-center">Our Beliefs</h2>
                        <div className="beliefs-grid">
                            <div className="belief-card">
                                <h3>The Bible</h3>
                                <p>We believe the Bible is the inspired and authoritative Word of God.</p>
                            </div>
                            <div className="belief-card">
                                <h3>Salvation</h3>
                                <p>We believe salvation is a gift of God's grace through faith in Jesus Christ.</p>
                            </div>
                            <div className="belief-card">
                                <h3>Community</h3>
                                <p>We believe in the power of fellowship and serving one another in love.</p>
                            </div>
                        </div>
                    </div>

                    <div className="leadership-section mt-4 text-center">
                        <h2>Pastoral Leadership</h2>
                        <div className="pastor-card">
                            <div className="pastor-img-container" style={{ width: '200px', height: '200px', margin: '0 auto 1rem', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--secondary)' }}>
                                <img src={import.meta.env.BASE_URL + "pasi.png"} alt="Reverend Njeri Gatama" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3>Reverend Njeri Gatama</h3>
                            <p>Senior Pastor</p>
                            <p>"Welcome to our family. We are excited to journey with you."</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
