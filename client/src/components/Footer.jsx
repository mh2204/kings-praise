import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="container footer-content">
                <div className="footer-section">
                    <h3>Kings Praise Church</h3>
                    <p>A Place of Joyful Worship and Grace</p>
                </div>
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Longonot, Kenya</p>
                    <p>email@example.com</p>
                    <p>+254 700 000000</p>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-youtube"></i>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Kings Praise Church. Made with love and faith.</p>
            </div>
        </footer>
    );
};

export default Footer;
