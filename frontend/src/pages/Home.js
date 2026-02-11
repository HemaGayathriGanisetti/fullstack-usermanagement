 import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../services/UserService";
import "../styles/Home.css";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faEye, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Fetch all users from backend
  const fetchUsers = () => {
    UserService.getAllUsers()
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => { fetchUsers(); }, []);

  // Delete user
  const handleDelete = (id) => {
    if(window.confirm("Are you sure to delete this user?")){
      UserService.deleteUser(id)
        .then(() => setUsers(prevUsers => prevUsers.filter(u => u.id !== id)))
        .catch(err => {
          console.error(err);
          alert("Failed to delete user");
        });
    }
  };

  return (
    <div className="home-container">
       
        <h2>All Users</h2>
         
       
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>No users found</td>
            </tr>
          ) : (
            users.map((u,index) => (
              <tr key={u.id}>

                <td>{index + 1}</td>
                <td>{u.name}</td>
                <td>{u.username}</td>
                <td>{u.email}</td>
                <td className="actions">
                  <FontAwesomeIcon
                    icon={faEye}
                    className="action-icon view-icon"
                    title="View User"
                    onClick={() => navigate(`/view/${u.id}`)}
                  />
                  <FontAwesomeIcon
                    icon={faPen}
                    className="action-icon edit-icon"
                    title="Edit User"
                    onClick={() => navigate(`/edit/${u.id}`)}
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="action-icon delete-icon"
                    title="Delete User"
                    onClick={() => handleDelete(u.id)}
                  />
                  <FontAwesomeIcon
                    icon={faPlusCircle}
                    className="action-icon add-icon"
                    title="Add User"
                    onClick={() => navigate("/add")}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
