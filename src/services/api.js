import axios, { Axios } from "axios";

const api = axios.create({
    baseURL: 'https://viacep.com.br/ws'
});
export default api;