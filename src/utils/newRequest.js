import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://fiverr-like-api.onrender.com/api/",
  // baseURL: "http://localhost:5000/api/",
  withCredentials: true,
});

export default newRequest;
