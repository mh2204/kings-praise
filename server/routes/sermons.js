const express = require('express');
const router = express.Router();
const { readData, writeData } = require('../utils/fileHandler');
const { authenticateToken } = require('../middleware/auth');

// GET all sermons
router.get('/', (req, res) => {
    const data = readData();
    res.json(data.sermons);
});

// ADD new sermon (Protected)
router.post('/', authenticateToken, (req, res) => {
    const { title, preacher, date, youtubeId, description } = req.body;
    const db = readData();

    const newSermon = {
        id: Date.now(),
        title,
        preacher,
        date,
        youtubeId,
        description
    };

    db.sermons.push(newSermon);
    if (writeData(db)) {
        res.status(201).json(newSermon);
    } else {
        res.status(500).json({ message: 'Error saving sermon' });
    }
});

// DELETE sermon (Protected)
router.delete('/:id', authenticateToken, (req, res) => {
    const db = readData();
    const id = parseInt(req.params.id);
    const initialLength = db.sermons.length;

    db.sermons = db.sermons.filter(s => s.id !== id);

    if (db.sermons.length < initialLength) {
        writeData(db);
        res.json({ message: 'Sermon deleted' });
    } else {
        res.status(404).json({ message: 'Sermon not found' });
    }
});

module.exports = router;
