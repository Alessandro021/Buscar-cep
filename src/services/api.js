import axios, { Axios } from "axios";

const api = axios.create({
    baseURL: 'viacep.com.br/ws'
});
export default api;