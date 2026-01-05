const express = require('express');
const router = express.Router();
const { readData, writeData } = require('../utils/fileHandler');
const { authenticateToken } = require('../middleware/auth');

// GET all gallery items
router.get('/', (req, res) => {
    const data = readData();
    res.json(data.gallery);
});

// ADD new photo (Protected)
router.post('/', authenticateToken, (req, res) => {
    const { title, date, imageUrl, description } = req.body;
    const db = readData();

    const newItem = {
        id: Date.now(),
        title,
        date,
        imageUrl,
        description
    };

    db.gallery.push(newItem);
    if (writeData(db)) {
        res.status(201).json(newItem);
    } else {
        res.status(500).json({ message: 'Error saving gallery item' });
    }
});

// DELETE photo (Protected)
router.delete('/:id', authenticateToken, (req, res) => {
    const db = readData();
    const id = parseInt(req.params.id);
    const initialLength = db.gallery.length;

    db.gallery = db.gallery.filter(item => item.id !== id);

    if (db.gallery.length < initialLength) {
        writeData(db);
        res.json({ message: 'Item deleted' });
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

module.exports = router;
