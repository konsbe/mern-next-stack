import axios from "axios";



export function fetchCurrentWeather (location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5ca5ced27e5c0797c3f2970af31ff579`;
    return new Promise((resolve, reject) => {

  axios
    .get(url)
    .then((snapshot) => {
      console.log(snapshot);
    //   return snapshot;
      const data = {bool:true}
      resolve(snapshot, data);
    })
    .catch((err) => {
      const data = {bool:false}
        reject(err, data);
    });
    });
};

export function fetchCurrentWeatherBool (location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5ca5ced27e5c0797c3f2970af31ff579`;
    return new Promise((resolve, reject) => {

  axios
    .get(url)
    .then((snapshot) => {
      console.log(snapshot);
      resolve("resolve");
    })
    .catch((err) => {
        resolve("reject");
    });
    });
};

// export { fetchCurrentWeather };
