import React from 'react';
import './Pages.css';

const Contact = () => {
    return (
        <div className="page-container">
            <div className="page-header text-center">
                <h1>Contact Us</h1>
                <p>We would love to hear from you.</p>
            </div>

            <section className="section container contact-section">
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p><i className="fas fa-map-marker-alt"></i> Longonot, Kenya</p>
                    <p><i className="fas fa-phone"></i> +254 700 000000</p>
                    <p><i className="fas fa-envelope"></i> info@kingspraise.org</p>

                    <div className="map-placeholder mt-2" style={{ height: '300px', overflow: 'hidden', borderRadius: 'var(--radius)' }}>
                        <iframe
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            style={{ border: 0 }}
                            src="https://maps.google.com/maps?q=-0.838366,36.462262&hl=es;z=14&output=embed"
                            allowFullScreen
                            title="Church Location"
                        ></iframe>
                    </div>
                </div>

                <div className="contact-form-container">
                    <h2>Send a Message</h2>
                    <form className="contact-form">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="Your Email" />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea rows="5" placeholder="How can we help?"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={(e) => e.preventDefault()}>Send Message</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;
