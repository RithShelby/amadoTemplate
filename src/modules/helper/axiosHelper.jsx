import axios from "axios";

export const setUpAxios = () => {
  axios.defaults.baseURL = "http://13.214.207.172:6002";
  axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = "Bearer " + localStorage.getItem("token");
      return config;
    }
  });
};
