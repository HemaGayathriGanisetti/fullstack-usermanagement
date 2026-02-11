import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import UserService from "../services/UserService";
import "../styles/Auth.css";

export default function ViewUser() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    UserService.getUserById(id).then(res => setUser(res.data));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="auth-container">
      <h2>View User</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <Link to="/">Back</Link>
    </div>
  );
}
