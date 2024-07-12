import axios from "axios";
import queryString from "query-string"; 

// const baseURL = "http://localhost:5000/api/v1/";
const baseURL = "https://apex-eight-pi.vercel.app/api/v1/";

const privateClient = axios.create({
  baseURL,
  paramsSerializer: {
    encode: (params) => queryString.stringify(params),
  },
});

privateClient.interceptors.request.use(async (config) => {

  if (config.multipart) {
    return {
      ...config,
      headers: {
        ...config.headers,
        "Content-type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("actkn")}`,
      },
    };
  }

  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("actkn")}`,
    },
  };
});

privateClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (err) => {
    throw err.response.data;
  }
);

export default privateClient;