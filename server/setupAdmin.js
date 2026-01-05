const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const dbPath = path.join(__dirname, 'data', 'db.json');

const setupAdmin = async () => {
    try {
        const rawData = fs.readFileSync(dbPath);
        const db = JSON.parse(rawData);

        // Check if admin exists
        const existingAdmin = db.users.find(u => u.username === 'admin');
        if (existingAdmin) {
            console.log('Admin user already exists.');
            return;
        }

        const hashedPassword = await bcrypt.hash('password123', 10);
        const newAdmin = {
            id: Date.now(),
            username: 'admin',
            password: hashedPassword,
            role: 'admin'
        };

        db.users.push(newAdmin);
        fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
        console.log('Admin user created successfully!');
        console.log('Username: admin');
        console.log('Password: password123');

    } catch (error) {
        console.error('Error creating admin:', error);
    }
};

setupAdmin();
