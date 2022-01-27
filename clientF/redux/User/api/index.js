import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization: "Bearer <token>",
    "X-Custom-Header": "foobar",
  },
});

export const logIn = (formData) => API.post("/user/login", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
