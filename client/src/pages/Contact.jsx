import React, { useState } from 'react';
import './Pages.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.name || !formData.email || !formData.message) {
            setStatus({ type: 'error', text: 'Please fill in all fields.' });
            return;
        }

        try {
            // Use FormSubmit to send the email directly to kingpraisecenter@yahoo.co.uk
            // Note: The first time a message is sent, an activation email will be sent to the yahoo address.
            const response = await fetch('https://formsubmit.co/ajax/kingpraisecenter@yahoo.co.uk', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                })
            });
            
            if (response.ok) {
                setStatus({ type: 'success', text: 'Message sent successfully! We will get back to you soon.' });
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Email delivery failed');
            }
        } catch (err) {
            // Fallback to mailto if the fetch fails
            window.location.href = `mailto:kingpraisecenter@yahoo.co.uk?subject=Message from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${encodeURIComponent(formData.email)}`;
            setStatus({ type: 'success', text: 'Opening your email client to send the message.' });
        }
    };

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
                    <p><i className="fas fa-phone"></i> +254 721831782</p>
                    <p><i className="fas fa-envelope"></i> kingpraisecenter@yahoo.co.uk</p>

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
                    {status && (
                        <div style={{
                            padding: '10px',
                            marginBottom: '15px',
                            borderRadius: '8px',
                            backgroundColor: status.type === 'success' ? '#d4edda' : '#f8d7da',
                            color: status.type === 'success' ? '#155724' : '#721c24'
                        }}>
                            {status.text}
                        </div>
                    )}
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input 
                                type="text" 
                                name="name"
                                placeholder="Your Name" 
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input 
                                type="email" 
                                name="email"
                                placeholder="Your Email" 
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea 
                                rows="5" 
                                name="message"
                                placeholder="How can we help?"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;
