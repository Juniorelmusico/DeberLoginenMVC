import axios from "axios";

const URL =
  process.env.NODE_ENV === "production"
    ? import.meta.env.VITE_BACKEND_URL
    : "http://localhost:8000";

console.log(URL);
const usersApi = axios.create({
  baseURL: `${URL}/tasks/api/v1`,
});

export const validateUser = (user) => usersApi.post("/validate_user/", user);

export const getAllUsers = () => usersApi.get("/users/");

export const getUser = (id) => usersApi.get(`/users/${id}`);

export const createUser = (user) => usersApi.post("/users/", user);

export const updateUser = (id, user) => usersApi.put(`/users/${id}/`, user);

export const deleteUser = (id) => usersApi.delete(`/users/${id}`);
