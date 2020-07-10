import axios from "axios";

export function axiosWithAuth() {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
      Authorization: token,
    },
    body: {
      username: "Lambda School",
      password: "i<3Lambd4",
    },
  });
}
