import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../services/UserService";
import "../styles/Auth.css";

export default function AddUser() {
  const [user, setUser] = useState({ name: "", username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    UserService.addUser(user).then(() =>{
        alert("User added successfully!");
     navigate("/Home");
    }).catch(err => {
      console.error(err);
      alert("Failed to add user");
    });
  };

  return (
    <div className="auth-container">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
