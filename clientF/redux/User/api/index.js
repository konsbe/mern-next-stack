import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization: "JWT_TOKEN",
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("userProfile")) {
    // req.headers.Authorization = `Bearer ${
    //   JSON.parse(localStorage.getItem("userProfile")).token
    // }`;
    console.log("getIT");
  }

  return req;
});


export const logIn = (formData) => API.post("/user/login", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
