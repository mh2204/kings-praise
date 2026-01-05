import React from 'react';
import './Hero.css'; // Reusing some hero styles or create new

const PastorSection = () => {
    return (
        <section className="section bg-white container">
            <div className="pastor-section-content">
                <div className="pastor-image-wrapper">
                    <div className="pastor-image-placeholder">
                        <img src="/pasi.png" alt="Pastor" />
                    </div>
                </div>
                <div className="pastor-text">
                    <h2>A Word from Our Pastor</h2>
                    <h3 className="pastor-name">Reverend Njeri Gatama</h3>
                    <p>
                        "Welcome to Kings Praise Church! We are delighted to have you here.
                        Our heart is to see lives transformed by the power of God's love.
                        We believe that you are not here by accident, but by divine appointment.
                        May you find a home, a family, and a purpose here with us."
                    </p>
                    <p className="signature">- Blessings and Love</p>
                </div>
            </div>
        </section>
    );
};

export default PastorSection;
