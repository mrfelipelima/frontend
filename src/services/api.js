import axios from "axios";

const api = axios.create({
  baseURL: "https://labgefabox-backend.herokuapp.com/",
});

export default api;
