 import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";
import "../styles/Auth.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock,faEye,faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");

    try {
      await AuthService.login(user);
      alert("Login successful!");
      navigate("/home");
    } catch (err) {
      setError(err.response?.data || "Login failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <FontAwesomeIcon icon={faUser} className="input-icon" />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={user.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <FontAwesomeIcon icon={faLock} className="input-icon" />
          <input
            type= {showPassword ? "text" : "password"} 
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
          />
        
        <span
            className="input-icon eye-icon"
            onClick={() => setShowPassword(!showPassword)}
            style={{ cursor: "pointer" }}
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </span>
          </div>

        <button type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>}
      <p className="register-text">
    Don't have an account?{" "}
    <span className="register-link" onClick={() => navigate("/register")}>
      Register here
    </span>
  </p>
    </div>
  );
}


