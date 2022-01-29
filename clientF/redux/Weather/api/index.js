import axios from "axios";


// export function fetchCurrentWeather(location) {
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5ca5ced27e5c0797c3f2970af31ff579`;
//   new Promise((resolve, reject) => {
//     axios({
//       method: "get",
//       url: url,
//       headers: {
//         "Content-type": "application/json",
//       },
//     }).then((res) => {
//       console.log(res);
//       // return res.data;
//       // resolve(res);
//       // console.log(res);
//     });
//   });
// }


export function fetchCurrentWeather(location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5ca5ced27e5c0797c3f2970af31ff579`;
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: url,
      headers: {
        "Content-type": "application/json",
      }
    })
    // axios
    //   .get(url)
      .then((snapshot) => {
        //   return snapshot;
        // const data = {bool:true}
        resolve(snapshot);
      })
      .catch((err) => {
        // const data = {bool:false}
        reject(err);
      });
  });
}

export function fetchCurrentWeatherBool(location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5ca5ced27e5c0797c3f2970af31ff579`;
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((snapshot) => {
        resolve("resolve");
      })
      .catch((err) => {
        resolve("reject");
      });
  });
};

// export { fetchCurrentWeather };
