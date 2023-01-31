import axios from "axios";

const api = axios.create({
  baseURL: "https://tranquil-mountain-05091.herokuapp.com/",
});

export default api;
