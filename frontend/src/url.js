import axios from "axios";

// 1. Export baseUrl strictly as a String
export const baseUrl = process.env.REACT_APP_BACKEND_URL || "/api";

// 2. Export default Axios instance if needed elsewhere
const API = axios.create({
  baseURL: baseUrl
});

export default API;
