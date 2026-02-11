 import React from "react";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EditUser from "./pages/EditUser";
import ViewUser from "./pages/ViewUser";
import AddUser from "./pages/AddUser";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/home" element={<Home />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/view/:id" element={<ViewUser />} />
        <Route path="/add" element={<AddUser />} />
      </Routes>
    </Router>
  );
}

export default App;


