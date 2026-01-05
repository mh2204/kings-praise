import React, { useEffect, useState } from 'react';
import './Pages.css';

const Gallery = () => {
    const [photos, setPhotos] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/gallery')
            .then(res => res.json())
            .then(data => setPhotos(data))
            .catch(err => console.error('Error fetching gallery:', err));
    }, []);

    const openLightbox = (photo) => {
        setSelectedImage(photo);
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    return (
        <div className="page-container">
            <div className="page-header text-center">
                <h1>Gallery</h1>
                <p>Moments of joy and fellowship.</p>
            </div>

            <section className="section container">
                <div className="gallery-grid">
                    {photos.length > 0 ? (
                        photos.map(photo => (
                            <div key={photo.id} className="gallery-card" onClick={() => openLightbox(photo)}>
                                <div className="gallery-img-container">
                                    <img src={`http://localhost:5000${photo.imageUrl}`} alt={photo.title} />
                                </div>
                                <div className="gallery-info">
                                    <h3>{photo.title}</h3>
                                    <p>{photo.description}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center">No photos available yet.</p>
                    )}
                </div>
            </section>

            {selectedImage && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                        <button className="close-lightbox" onClick={closeLightbox}>&times;</button>
                        <img src={`http://localhost:5000${selectedImage.imageUrl}`} alt={selectedImage.title} />
                        <div className="lightbox-caption">
                            <h3>{selectedImage.title}</h3>
                            <p>{selectedImage.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
