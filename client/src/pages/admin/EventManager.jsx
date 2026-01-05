import React, { useState, useEffect } from 'react';

const EventManager = () => {
    const [events, setEvents] = useState([]);
    const [form, setForm] = useState({ title: '', date: '', time: '', description: '' });
    const token = localStorage.getItem('token');

    const fetchEvents = async () => {
        const res = await fetch('http://localhost:5000/api/events');
        const data = await res.json();
        setEvents(data);
    };

    useEffect(() => { fetchEvents(); }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:5000/api/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(form)
            });

            if (res.ok) {
                setForm({ title: '', date: '', time: '', description: '' });
                fetchEvents();
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Delete this event?')) return;
        await fetch(`http://localhost:5000/api/events/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
        });
        fetchEvents();
    };

    return (
        <div className="manager-container">
            <h3>Event Manager</h3>

            <div className="add-form">
                <h4>Add New Event</h4>
                <form onSubmit={handleSubmit}>
                    <input name="title" placeholder="Event Title" value={form.title} onChange={handleChange} required />
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <input name="date" type="date" value={form.date} onChange={handleChange} required style={{ flex: 1 }} />
                        <input name="time" type="time" value={form.time} onChange={handleChange} required style={{ flex: 1 }} />
                    </div>
                    <textarea name="description" placeholder="Description/Details" value={form.description} onChange={handleChange} rows="3"></textarea>
                    <button type="submit" className="btn btn-primary">Add Event</button>
                </form>
            </div>

            <div className="manager-list">
                {events.map(e => (
                    <div key={e.id} className="manager-item">
                        <div style={{ flexGrow: 1 }}>
                            <strong>{e.title}</strong>
                            <div className="text-muted small">{e.date} at {e.time}</div>
                        </div>
                        <button onClick={() => handleDelete(e.id)} className="btn btn-danger btn-sm">Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventManager;
