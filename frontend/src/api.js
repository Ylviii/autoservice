import axios from "axios";

const api = axios.create({
  baseURL: "http://http://127.0.0.1:8000", // заменишь на свой backend-адрес
  timeout: 5000,
});

export default api;
