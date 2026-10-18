import axios from "axios";

export default axios.create({
  // Use relative path so Nginx proxies requests to the backend, 
  // or fall back to window.location.origin/api if needed
  baseURL: process.env.REACT_APP_BACKEND_URL || "/api" 
});
