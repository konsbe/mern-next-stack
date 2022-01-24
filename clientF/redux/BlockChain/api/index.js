import axios from "axios";

const url = "http://localhost:3000/blog/blockchain/api";

export const fetchCryptos = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((snapshot) => {
        // console.log(snapshot, "snapshot");
        console.log("resolve");

        // console.log(resolve.snapshot)
        resolve(snapshot);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// export const fetchProjects = () => axios.get(url);


