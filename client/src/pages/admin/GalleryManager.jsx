import React, { useState, useEffect } from 'react';

const GalleryManager = () => {
    const [photos, setPhotos] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
    const token = localStorage.getItem('token');

    const fetchPhotos = async () => {
        const res = await fetch('http://localhost:5000/api/gallery');
        const data = await res.json();
        setPhotos(data);
    };

    useEffect(() => { fetchPhotos(); }, []);

    const handleUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', file);

        // First upload image
        const uploadRes = await fetch('http://localhost:5000/api/upload', {
            method: 'POST',
            body: formData
        });

        if (uploadRes.ok) {
            const { filePath } = await uploadRes.json();

            // Then save metadata
            await fetch('http://localhost:5000/api/gallery', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    title,
                    description,
                    imageUrl: filePath,
                    date: new Date().toISOString()
                })
            });

            setTitle('');
            setDescription('');
            setFile(null);
            fetchPhotos();
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Delete this photo?')) return;
        await fetch(`http://localhost:5000/api/gallery/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
        });
        fetchPhotos();
    };

    return (
        <div className="manager-container">
            <h3>Gallery Manager</h3>

            <div className="add-form">
                <h4>Add New Photo</h4>
                <form onSubmit={handleUpload}>
                    <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
                    <input type="text" placeholder="Caption" value={description} onChange={e => setDescription(e.target.value)} />
                    <input type="file" onChange={e => setFile(e.target.files[0])} required />
                    <button type="submit" className="btn btn-primary">Upload Photo</button>
                </form>
            </div>

            <div className="manager-list">
                {photos.map(p => (
                    <div key={p.id} className="manager-item">
                        <img src={`http://localhost:5000${p.imageUrl}`} alt={p.title} className="thumb" />
                        <span>{p.title}</span>
                        <button onClick={() => handleDelete(p.id)} className="btn btn-danger btn-sm">Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryManager;
