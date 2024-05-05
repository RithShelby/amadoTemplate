import axios from "axios";
const reqLogin = (payload = {}) => {
  return axios.post("/api/auth/login", payload, {
    headers: {
      Authorization: "Basic aG90ZWw6aG90ZWxAMTIz",
    },
  });
};
const reqGetProfile = (payload = {}) => {
  return axios.get("/api/users/getProfile", payload);
};

export { reqLogin, reqGetProfile };
