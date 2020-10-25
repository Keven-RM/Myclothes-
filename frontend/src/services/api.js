import axio from 'axios';
const api = axio.create({baseURL: 'http://localhost:4000'});

export default api;