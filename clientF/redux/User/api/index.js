import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000",
});
// JSON.parse(localStorage.getItem("userProfile")).token

axios.interceptors.request.use((req) => {
  if (!localStorage.getItem("userProfile").token) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("userProfile")).token
    }`;
    // console.log("getit");
  }

  return req;
});

export const logIn = (formData) => API.post("/user/login", formData);
// export const findUser = (formData) => API.post("/user/login", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
