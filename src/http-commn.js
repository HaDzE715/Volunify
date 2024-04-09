import axios from "axios";

let baseUrl = window.location.origin;
if (baseUrl.includes("localhost")) {
  baseUrl = "https://volunteers-1.onrender.com";
}
const http = axios.create({
  // baseURL: "https://volunteers.onrender.com/",
  // baseURL: "https://volunteers-1.onrender.com",
  baseURL: baseUrl,

  headers: {
    "Content-type": "application/json",
  },
});
export default http;
