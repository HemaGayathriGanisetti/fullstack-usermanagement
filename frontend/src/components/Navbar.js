 // src/components/Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">FullStackApp</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        {localStorage.getItem("token") ? (
          <button onClick={logout} className="logout-btn">Logout</button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
