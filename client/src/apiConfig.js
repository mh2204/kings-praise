const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const IS_PROD = import.meta.env.PROD;
const BASE_PATH = import.meta.env.BASE_URL; // '/kings-praise/'

/**
 * Fetches data from either the local API (Dev) or the static db.json (Prod).
 * @param {string} endpoint - The resource name (e.g., 'events', 'sermons', 'gallery')
 */
export const fetchContent = async (endpoint) => {
    if (IS_PROD) {
        // In production, fetch the single big db.json file
        // Note: BASE_PATH includes trailing slash usually
        const response = await fetch(`${BASE_PATH}db.json`);
        const db = await response.json();
        const data = db[endpoint];

        // Fix image paths in static mode if necessary
        if (endpoint === 'gallery' && data) {
            return data.map(item => ({
                ...item,
                // Ensure imageUrl has the correct base path prefix if it's relative
                imageUrl: item.imageUrl.startsWith('/')
                    ? item.imageUrl // Logic handled in component or here? Component usually easier but consistency matters.
                    : item.imageUrl
            }));
        }
        return data;
    } else {
        // In dev, hit the Express server
        const response = await fetch(`${API_BASE_URL}/${endpoint}`);
        return response.json();
    }
};

/**
 * Helper to get full image URL correctly in both environments
 */
export const getImageUrl = (path) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;

    // If prod, prepend base path (e.g. /kings-praise/) to the /uploads/... path
    if (IS_PROD) {
        // Warning: path usually comes as '/uploads/file.png' from db
        // properties: BASE_PATH = '/kings-praise/'
        // Result needed: '/kings-praise/uploads/file.png'
        // If we simply join, ensure no double slashes if path has leading slash
        const cleanPath = path.startsWith('/') ? path.substring(1) : path;
        return `${BASE_PATH}${cleanPath}`;
    }

    // If dev, point to localhost server
    return `http://localhost:5000${path}`;
};
