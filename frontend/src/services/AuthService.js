// src/services/AuthService.js
import axiosInstance from "../api/axiosInstance";

class AuthService {
  register(user) {
    return axiosInstance.post("/auth/register", user).then(res => {
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.username);
      }
      return res.data;
    });
  }

  login(user) {
    return axiosInstance.post("/auth/login", user).then(res => {
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.username);
      }
      return res.data;
    });
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  }
   getCurrentUser() {
    return localStorage.getItem("username");
  }

  // Get token for authenticated requests
  getToken() {
    return localStorage.getItem("token");
  }
}


const authService = new AuthService();
export default authService;
