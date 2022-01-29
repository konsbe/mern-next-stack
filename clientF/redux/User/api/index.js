import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000",
});

// axios.interceptors.request.use((req) => {
//   // if (localStorage.getItem("userProfile")) {
//   // req.headers.test = `Bearer ${
//   //   JSON.parse(localStorage.getItem("userProfile")).token
//   // }`;
//   req.headers = "asdasdds";
//   return req;
// });

// export const logIn = (formData) => {
//   return new Promise((resolve, reject) => {
//       axios({
//         method: "post",
//         url: "http://localhost:3000/user/login",
//         data: {
//           formData,
//         },
//         headers: {
//           "Content-type": "application/json",
//           Authorization: JSON.parse(localStorage.getItem("userProfile")).token,
//         },
//       })
//         .then((snapshot) => {
//           // console.log(snapshot, "snapshot");
//           console.log("resolve");

//           // console.log(resolve.snapshot)
//           resolve(snapshot);
//         })
//         .catch((err) => {
//           reject(err);
//         });
//   });
// };

// export const signUp = (formData) => {
//   return new Promise((resolve, reject) => {

//       axios({
//         method: "post",
//         url: "http://localhost:3000/user/signup",
//         data: {
//           formData
//         },
//         headers: {
//           "Content-type": "application/json",
//           Authorization: JSON.parse(localStorage.getItem("userProfile")).token,

//         },
//       })
//         .then((snapshot) => {
//           // console.log(snapshot, "snapshot");
//           console.log("resolve");

//           // console.log(resolve.snapshot)
//           resolve(snapshot);
//         })
//         .catch((err) => {
//           reject(err);
//         });
//   });
// };

// let axiosConfig = {
//   headers: {
//     "Content-Type": "application/json;charset=UTF-8",
//     "Access-Control-Allow-Origin": "*",
//     // "Authentication": JSON.parse(localStorage.getItem("userProfile")).token,
//   },
// };

// export const logIn = (formData) =>
//   API
//     .post("user/login", formData)
//     .then((res) => {
//       console.log("RESPONSE RECEIVED: ", res);
//     })
//     .catch((err) => {
//       console.log("AXIOS ERROR: ", err);
//     });
// export const signUp = (formData) =>
//   API.post("user/signup", formData)
//     .then((res) => {
//       console.log("RESPONSE RECEIVED: ", res);
//     })
//     .catch((err) => {
//       console.log("AXIOS ERROR: ", err);
//     });

export const logIn = (formData) => API.post("/user/login", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
