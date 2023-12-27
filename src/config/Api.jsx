// config/api.js
import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://api.uniodonto.gdelivery.app.br/', 
});

export default Api;
