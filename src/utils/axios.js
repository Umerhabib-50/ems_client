// axios.js
import axios from "axios";

// Create an Axios instance with default headers
const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add an interceptor to set the authorization token
instance.interceptors.request.use(
  (config) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzdhNzA2YTJiNWNmNGE1NTU4MTA0NyIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwiaWF0IjoxNjk4MjQ3NDIyLCJleHAiOjE2OTgyNTEwMjJ9.-PYpEXGhaMsH4kARQorkt7kc5EtEgTzohv7DHIBaUYg";
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
