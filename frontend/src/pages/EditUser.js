import React, { useEffect, useState } from "react";
import { useParams, useNavigate,useLocation } from "react-router-dom";
import UserService from "../services/UserService";
import "../styles/Auth.css";

export default function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const onUserUpdated = location.state?.onUserUpdated;
  const [user, setUser] = useState({ name: "", username: "", email: "" });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    UserService.getUserById(id)
    .then(res => setUser(res.data))
    .catch(err => {
      console.error(err);
      alert("Failed to fetch user details");
      navigate("/Home");
       })
      .finally(() => setLoading(false));
  }, [id, navigate]);

  const handleChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    UserService.updateUser(id, user)
  .then(res => {
    if (onUserUpdated) onUserUpdated(res.data); // replace the old user with updated one
    navigate("/Home"); // back to Home
  })
  .catch(err => {
        console.error(err);
        alert("Failed to update user");
      });
  };

  if (loading) return <p>Loading user details...</p>;
  return (
    <div className="auth-container">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={user.name} onChange={handleChange} required />
        <input type="text" name="username" placeholder="Username" value={user.username} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} required />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
