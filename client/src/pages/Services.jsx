import React, { useEffect, useState } from 'react';
import './Pages.css';

const Services = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/events')
            .then(res => res.json())
            .then(data => setEvents(data))
            .catch(err => console.error('Error fetching events:', err));
    }, []);

    return (
        <div className="page-container">
            <div className="page-header text-center">
                <h1>Services & Events</h1>
                <p>Join us for worship and fellowship.</p>
            </div>

            <section className="section container">
                <div className="services-schedule text-center">
                    <h2>Weekly Schedule</h2>
                    <div className="service-grid">
                        <div className="service-card">
                            <h3>Sunday Worship</h3>
                            <p className="time">12:00 PM – 1:00 PM</p>
                        </div>
                        <div className="service-card">
                            <h3>Wednesday Service</h3>
                            <p className="time">5:00 PM – 7:00 PM</p>
                        </div>
                        <div className="service-card">
                            <h3>Friday Service</h3>
                            <p className="time">5:00 PM – 7:00 PM</p>
                        </div>
                    </div>
                </div>

                <div className="events-section mt-4">
                    <h2 className="text-center">Upcoming Events</h2>
                    <div className="highlights-grid">
                        {events.length > 0 ? (
                            events.map(event => (
                                <div key={event.id} className="highlight-card">
                                    <div className="event-date">
                                        <span className="date-icon">{new Date(event.date).getDate()}</span>
                                        <span className="month-icon">{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
                                    </div>
                                    <h3>{event.title}</h3>
                                    <p className="event-time">{event.time}</p>
                                    <p>{event.description}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-center">No upcoming events at the moment.</p>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
