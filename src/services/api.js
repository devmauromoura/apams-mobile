import axios from 'axios';

const api = axios.create({
  baseURL: "http://137.220.42.176/api",
});

// Const utilizada para concatenar a URL da imagem vinda da API com storage.
export const URL = "http://137.220.42.176/";

export default api;