import axios from 'axios';

let apiURL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
if (apiURL && !apiURL.startsWith('http')) {
  apiURL = `http://localhost:${apiURL}`;
}

const api = axios.create({
  baseURL: apiURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
