import axios from "axios";

const http = axios.create({
  // baseURL: "https://volunteers.onrender.com/",
  baseURL: "http://localhost:5000/",

  headers: {
    "Content-type": "application/json",
  },
});
export default http;