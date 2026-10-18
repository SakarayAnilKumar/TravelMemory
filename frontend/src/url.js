import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || "/api"
});

// Provide both named and default exports so nothing breaks
export const baseUrl = API;
export default API;
