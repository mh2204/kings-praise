const express = require('express');
const router = express.Router();
const { readData, writeData } = require('../utils/fileHandler');

// POST new message
router.post('/', (req, res) => {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please provide all fields' });
    }

    const db = readData();
    if (!db.messages) {
        db.messages = [];
    }

    const newMessage = {
        id: Date.now(),
        name,
        email,
        message,
        date: new Date().toISOString()
    };

    db.messages.push(newMessage);
    if (writeData(db)) {
        res.status(201).json({ success: true, message: 'Message sent successfully!' });
    } else {
        res.status(500).json({ error: 'Error saving message' });
    }
});

module.exports = router;
