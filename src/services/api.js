import axios from 'axios';

const api = axios.create({
    baseURL: 'https://labgefa-stack.herokuapp.com'
});

export default api;