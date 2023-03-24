import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from "../pages/Home";
import Todo from "../pages/Todos";
import AddTodo from "../pages/AddTodo";
import UpdateTodo from "../pages/UpdateTodo";
import DeleteTodo from "../pages/DeleteTodo";
import Auth from "../components/auth/Login";

import './navbar.css'

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <Router>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <ul className="nav nav-pills mb-3 fs-3">
            <li className="logo nav-header  custom-link">
              <i className="ri-home-3-line"></i>
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item nav-pills ms-3 custom-link">
              <i className="ri-file-list-3-line"></i>
              <Link to="/Todos">My-Todos</Link>
            </li>
            <li className="nav-item ms-3 custom-link">
              <i className="ri-menu-add-line"></i>
              <Link to="/Add-Todos">Add-Todos</Link>
            </li>
            <li className="nav-item ms-3 custom-link">
              <i className="ri-edit-2-fill"></i>
              <Link to="/Update">Update</Link>
            </li>
            <li className="nav-item ms-3 custom-link">
              <i className="ri-delete-bin-5-line"></i>
              <Link to="/Delete">Delete</Link>
            </li>
          </ul>
        </div>
        <div>
          <nav className="nav nav-pills nav-justified">
            {isLoggedIn ? (
              <button className="nav-link active" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <Link className="nav-link active" aria-current="page" to="/Auth">
                Login/Signup
              </Link>
            )}
          </nav>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Todos" element={<Todo />} />
        <Route path="/Add-Todos" element={<AddTodo />} />
        <Route path="/Update" element={<UpdateTodo />} />
        <Route path="/Delete" element={<DeleteTodo />} />
        <Route
          path="/Auth"
          element={<Auth onLoginSuccess={handleLogin} />}
        />
      </Routes>
      {/* <div className="footer">
        <h4>&copy; 2023 Task Train. All rights reserved.</h4>
      </div> */}
    </Router>
  );
}

export default Navbar;
