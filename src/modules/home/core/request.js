import axios from "axios";
const reGetUser = () => {
  return axios.get("/api/users");
};
const reCreateUser = (payload) => {
  return axios.post("/api/users", payload);
};
const reUpdateUser = (payload) => {
  return axios.put("/api/users", payload);
};

export { reGetUser, reCreateUser, reUpdateUser };
