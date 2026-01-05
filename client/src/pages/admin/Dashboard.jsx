import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GalleryManager from './GalleryManager';
import SermonManager from './SermonManager';
import EventManager from './EventManager';
import './Admin.css';

const Dashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('gallery');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/admin/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/admin/login');
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-sidebar">
                <h3>Admin Panel</h3>
                <ul>
                    <li className={activeTab === 'gallery' ? 'active' : ''} onClick={() => setActiveTab('gallery')}>Gallery</li>
                    <li className={activeTab === 'sermons' ? 'active' : ''} onClick={() => setActiveTab('sermons')}>Sermons</li>
                    <li className={activeTab === 'events' ? 'active' : ''} onClick={() => setActiveTab('events')}>Events</li>
                </ul>
                <button onClick={handleLogout} className="btn btn-outline btn-sm mt-auto">Logout</button>
            </div>
            <div className="dashboard-content">
                <header className="dashboard-header">
                    <h2>Dashboard</h2>
                    <p>Manage your website content</p>
                </header>
                <div className="dashboard-main">
                    {activeTab === 'gallery' && <GalleryManager />}
                    {activeTab === 'sermons' && <SermonManager />}
                    {activeTab === 'events' && <EventManager />}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
