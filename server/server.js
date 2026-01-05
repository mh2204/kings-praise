const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const eventsRouter = require('./routes/events');
const sermonsRouter = require('./routes/sermons');

const authRouter = require('./routes/auth');
const uploadRouter = require('./routes/upload');
const galleryRouter = require('./routes/gallery');

// Basic Route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Kings Praise Church API' });
});

// Static folder for images
app.use('/uploads', express.static('uploads'));

app.use('/api/events', eventsRouter);
app.use('/api/sermons', sermonsRouter);
app.use('/api/auth', authRouter);
app.use('/api/upload', uploadRouter);
app.use('/api/gallery', galleryRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
