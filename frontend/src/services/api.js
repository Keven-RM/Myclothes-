import axio from 'axios';
const api = axio.create({baseURL: 'https://rocketseat-node.herokuapp.com/api'});

export default api;