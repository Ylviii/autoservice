import axios from "axios";


const API_BASE_URL = "http://http://127.0.0.1:8000"; 

export const registerUser = (userData) =>
    axios.post(`${API_BASE_URL}/register`, userData);

export const getProfile = (userId) =>
    axios.get(`${API_BASE_URL}/users/${userId}`);

export const updateProfile = (userId, data) =>
    axios.put(`${API_BASE_URL}/users/${userId}`, data);

export const createRepairRequest = (requestData) =>
    axios.post(`${API_BASE_URL}/repair-requests`, requestData);

export default api;
