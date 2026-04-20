import React from 'react';
import './Pages.css';

const Give = () => {
    return (
        <div className="page-container">
            <div className="page-header text-center">
                <h1>Give</h1>
                <p>Generosity is an act of worship.</p>
            </div>

            <section className="section container text-center">
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <p className="lead-text">"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." — 2 Corinthians 9:7</p>

                    <div className="give-card mt-4">
                        <h2>M-Pesa Buy Goods</h2>
                        <div className="mpesa-details">
                            <p>Till Number:</p>
                            <h3 className="highlight-number">8860514</h3>
                            <p>Kings Praise Church</p>
                        </div>
                        <p className="step-note">1. Go to M-Pesa &gt; Lipa na M-Pesa &gt; Buy Goods and Services</p>
                        <p className="step-note">2. Enter Till Number: <strong>8860514</strong></p>
                        <p className="step-note">3. Enter Amount and PIN</p>
                    </div>

                    <p className="mt-2">Thank you for supporting the ministry work.</p>
                </div>
            </section>
        </div>
    );
};

export default Give;
