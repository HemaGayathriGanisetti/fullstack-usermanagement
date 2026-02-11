import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";
import "../styles/Auth.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function Register() {
  const [user, setUser] = useState({name: "", username: "", email: "", password: "" });
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
      await AuthService.register(user);
      alert("Registration successful!");
      navigate("/home");
    } catch (err) {
      setError(err.response?.data || "Registration failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
         <div className="input-group">
    <FontAwesomeIcon icon={faUser} className="input-icon" />
    <input
      type="text"
      name="name"
      placeholder="Full Name"
      value={user.name}
      onChange={handleChange}
      required
    />
  </div>
        
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
          <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>

      
        <div className="input-group">
          <FontAwesomeIcon icon={faLock} className="input-icon" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
          />
          <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </span>
        </div>

        <button type="submit">Register</button>
      </form>

      {error && <p className="error">{error}</p>}

      <p className="register-text">
        Already have an account?{" "}
        <span className="register-link" onClick={() => navigate("/login")}>
          Login here
        </span>
      </p>
    </div>
  );
}
