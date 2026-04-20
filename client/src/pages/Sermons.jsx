import React, { useState, useEffect } from 'react';
import YoutubeEmbed from '../components/YoutubeEmbed';
import { fetchContent } from '../apiConfig';

const Sermons = () => {
    const [sermons, setSermons] = useState([]);

    useEffect(() => {
        fetchContent('sermons')
            .then(data => setSermons(data))
            .catch(err => console.error('Error fetching sermons:', err));
    }, []);

    return (
        <div className="page-container">
            <div className="page-header text-center">
                <h1>Sermons</h1>
                <p>Watch live streams and past messages.</p>
            </div>

            <section className="section container">
                <div className="live-stream-section text-center">
                    <h2>Live Stream</h2>
                    <p className="mb-2">Join us live every Sunday at 12:00 PM.</p>
                    <div className="video-container-main">
                        <YoutubeEmbed embedId="live_stream_placeholder_id" />
                    </div>
                </div>

                <div className="past-sermons-section mt-4">
                    <h2 className="text-center">Past Sermons</h2>
                    <div className="highlights-grid">
                        {sermons.length > 0 ? (
                            sermons.map(sermon => (
                                <div key={sermon.id} className="highlight-card sermon-card">
                                    <YoutubeEmbed embedId={sermon.youtubeId} />
                                    <div className="sermon-info mt-2">
                                        <h3>{sermon.title}</h3>
                                        <p className="preacher">By {sermon.preacher}</p>
                                        <p className="date">{new Date(sermon.date).toLocaleDateString()}</p>
                                        <p>{sermon.description}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center">No past sermons available.</p>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Sermons;
