import axios from "axios";

const api = axios.create({
  baseURL: "https://omnistack-backend-wagner.herokuapp.com"
});

export default api;
