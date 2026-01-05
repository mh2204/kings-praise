const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { readData, writeData } = require('../utils/fileHandler');
const { SECRET_KEY } = require('../middleware/auth');

// Login Route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const db = readData();
    const user = db.users.find(u => u.username === username);

    if (!user) {
        return res.status(400).json({ message: 'User not found' });
    }

    try {
        if (await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ username: user.username, role: user.role }, SECRET_KEY);
            res.json({ token, role: user.role });
        } else {
            res.send('Not Allowed');
        }
    } catch {
        res.status(500).send();
    }
});

// Setup Initial Admin (Run once manually or via Postman if needed, strictly for setup)
router.post('/setup-admin', async (req, res) => {
    const { username, password } = req.body;
    const db = readData();

    // Check if admin already exists
    if (db.users.find(u => u.role === 'admin')) {
        // return res.status(403).json({ message: 'Admin already exists' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = { id: Date.now(), username, password: hashedPassword, role: 'admin' };
        db.users.push(newUser);
        writeData(db);
        res.status(201).json({ message: 'Admin created' });
    } catch {
        res.status(500).send();
    }
});

module.exports = router;
