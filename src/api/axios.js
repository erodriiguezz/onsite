import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000",
});

// import axios from "axios";
// const BASE_URL = "http://localhost:8000";

// export default axios.create({ baseUrl: BASE_URL });

// export const axiosPrivate = axios.create({
//   baseURL: BASE_URL,
//   headers: { "Content-Type": "application/json" },
//   withCredentials: true,
// });
