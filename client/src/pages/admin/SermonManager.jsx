import React, { useState, useEffect } from 'react';

const SermonManager = () => {
    const [sermons, setSermons] = useState([]);
    const [form, setForm] = useState({ title: '', preacher: '', youtubeId: '', description: '', date: '' });
    const token = localStorage.getItem('token');

    const fetchSermons = async () => {
        const res = await fetch('http://localhost:5000/api/sermons');
        const data = await res.json();
        setSermons(data);
    };

    useEffect(() => { fetchSermons(); }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:5000/api/sermons', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(form)
            });

            if (res.ok) {
                setForm({ title: '', preacher: '', youtubeId: '', description: '', date: '' });
                fetchSermons();
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Delete this sermon?')) return;
        await fetch(`http://localhost:5000/api/sermons/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
        });
        fetchSermons();
    };

    return (
        <div className="manager-container">
            <h3>Sermon Manager</h3>

            <div className="add-form">
                <h4>Add New Sermon</h4>
                <form onSubmit={handleSubmit}>
                    <input name="title" placeholder="Sermon Title" value={form.title} onChange={handleChange} required />
                    <input name="preacher" placeholder="Preacher Name" value={form.preacher} onChange={handleChange} required />
                    <input name="youtubeId" placeholder="YouTube Video ID (e.g. dQw4w9WgXcQ)" value={form.youtubeId} onChange={handleChange} required />
                    <input name="date" type="date" value={form.date} onChange={handleChange} required />
                    <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} rows="3"></textarea>
                    <button type="submit" className="btn btn-primary">Add Sermon</button>
                </form>
            </div>

            <div className="manager-list">
                {sermons.map(s => (
                    <div key={s.id} className="manager-item">
                        <div style={{ flexGrow: 1 }}>
                            <strong>{s.title}</strong>
                            <div className="text-muted small">{s.preacher} | {s.date}</div>
                        </div>
                        <button onClick={() => handleDelete(s.id)} className="btn btn-danger btn-sm">Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SermonManager;
