// config/api.js
import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://apiforms.uniodontomanaus.com.br:3001/', // Substitua pela URL da sua API
  // Outras configurações do Axios podem ser adicionadas aqui
});

export default Api;
