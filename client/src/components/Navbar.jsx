import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                    <img src={import.meta.env.BASE_URL + "vite.svg"} alt="Logo" style={{ height: '50px', width: '50px', marginRight: '10px', borderRadius: '50%', objectFit: 'cover' }} />
                    <div className="logo-text">
                        <div className="logo-title">KINGS PRAISE CHURCH</div>
                        <div className="logo-subtitle">AND PRAYER CENTER</div>
                    </div>
                </Link>

                <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                    <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMenu}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links" onClick={closeMenu}>About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-links" onClick={closeMenu}>Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sermons" className="nav-links" onClick={closeMenu}>Sermons</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/gallery" className="nav-links" onClick={closeMenu}>Gallery</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/give" className="nav-links" onClick={closeMenu}>Give</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links" onClick={closeMenu}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
