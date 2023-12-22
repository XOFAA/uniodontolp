// config/api.js
import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://10.0.0.6:3001/', // Substitua pela URL da sua API
  // Outras configurações do Axios podem ser adicionadas aqui
});

export default Api;
