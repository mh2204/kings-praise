const express = require('express');
const router = express.Router();
const { readData, writeData } = require('../utils/fileHandler');
const { authenticateToken } = require('../middleware/auth');

// GET all events
router.get('/', (req, res) => {
    const data = readData();
    res.json(data.events);
});

// ADD new event (Protected)
router.post('/', authenticateToken, (req, res) => {
    const { title, date, time, description } = req.body;
    const db = readData();

    const newEvent = {
        id: Date.now(),
        title,
        date,
        time,
        description
    };

    db.events.push(newEvent);
    if (writeData(db)) {
        res.status(201).json(newEvent);
    } else {
        res.status(500).json({ message: 'Error saving event' });
    }
});

// DELETE event (Protected)
router.delete('/:id', authenticateToken, (req, res) => {
    const db = readData();
    const id = parseInt(req.params.id);
    const initialLength = db.events.length;

    db.events = db.events.filter(e => e.id !== id);

    if (db.events.length < initialLength) {
        writeData(db);
        res.json({ message: 'Event deleted' });
    } else {
        res.status(404).json({ message: 'Event not found' });
    }
});

module.exports = router;
