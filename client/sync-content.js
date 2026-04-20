import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const SERVER_DATA = path.join(__dirname, '../server/data/db.json');
const SERVER_UPLOADS = path.join(__dirname, '../server/uploads');
const CLIENT_PUBLIC = path.join(__dirname, 'public');
const PUBLIC_DB = path.join(CLIENT_PUBLIC, 'db.json');
const PUBLIC_UPLOADS = path.join(CLIENT_PUBLIC, 'uploads');

console.log('🔄 Syncing content from Server to Client...');

// 1. Copy db.json
try {
    fs.copyFileSync(SERVER_DATA, PUBLIC_DB);
    console.log('✅ db.json copied.');
} catch (err) {
    console.error('❌ Error copying db.json:', err);
}

// 2. Copy Uploads
try {
    if (!fs.existsSync(PUBLIC_UPLOADS)) {
        fs.mkdirSync(PUBLIC_UPLOADS, { recursive: true });
    }

    // Recursive copy function or fs.cp (Node 16.7+)
    fs.cpSync(SERVER_UPLOADS, PUBLIC_UPLOADS, { recursive: true });
    console.log('✅ Uploads folder copied.');
} catch (err) {
    console.error('❌ Error copying uploads:', err);
}

console.log('🚀 Content Sync Complete! Ready to build.');
