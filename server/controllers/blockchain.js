import axios from "axios";
import { useDispatch } from "react-redux";
// const rp = require("request-promise");
// const string = "bbc113f1-3455-4b02-8bb6-2dd3e357d85f";
// export const url =
//   "https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=bbc113f1-3455-4b02-8bb6-2dd3e357d85f" +
//   string;

const requestOptions = {
  method: "GET",
  uri: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
  qs: {
    start: "1",
    limit: "5000",
    convert: "USD",
  },
  headers: {
    "X-CMC_PRO_API_KEY": "bbc113f1-3455-4b02-8bb6-2dd3e357d85f",
  },
  json: true,
  gzip: true,
};

// export const getBlocks = async (req, res) => {
//   // const data = {};
//   try {
//     const url =
//       "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=bbc113f1-3455-4b02-8bb6-2dd3e357d85f";
//     const func = async (url) => {
//       return new Promise((resolve, reject) => {
//         axios
//           .get(url)
//           .then((res) => {
//             // console.log("resolve", res.data);
//             // const data = res.data;
//             console.log(res.data, "adsasddsa");
//             // return res.data;
//             // r;
//             // resolve(res.data);
//           })
//           .catch((err) => {
//             console.log(err);
//             // reject(err);
//           });
//       });
//     };

//     // };
//   } catch (err) {
//     res.status(401).json({ message: err.message });
//   }
// };
export const getBlocks = async (req, res) => {
  let data = [];
  const url =
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=bbc113f1-3455-4b02-8bb6-2dd3e357d85f";
  try {
    axios
      .get(url)
      .then((result) => {
        const snap = JSON.stringify(result.data);
        // console.log("resolve", JSON.stringify(result.data.status));
        data.push(JSON.stringify(result.data.status));
        // console.log(data, "data");
        res.send(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};