import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-29599/us-central1/api", //from index.js in functions
});

export default instance;
