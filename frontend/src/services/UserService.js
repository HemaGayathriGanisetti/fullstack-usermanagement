 // src/services/UserService.js
import axiosInstance from "../api/axiosInstance";

const UserService = {
  getAllUsers: () => axiosInstance.get("/users"),
  getUserById: (id) => axiosInstance.get(`/users/${id}`),
  addUser: (user) => axiosInstance.post("/auth/register", user),
  updateUser: (id, user) => axiosInstance.put(`/users/${id}`, user),
  deleteUser: (id) => axiosInstance.delete(`/users/${id}`),
};

export default UserService;


