import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-movie-g1ve.onrender.com",
});
