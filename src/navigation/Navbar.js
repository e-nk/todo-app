import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from "../pages/Home";
import Todo from "../pages/Todos";
import AddTodo from "../pages/AddTodo";
import UpdateTodo from "../pages/UpdateTodo";
import DeleteTodo from "../pages/DeleteTodo";


function Navbar(){


    return(
        <Router>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <ul class="navbar-nav me-auto mb-3 fs-3">
                    <li className="logo nav-header navbar-brand ">
                    <i class="ri-home-3-line"></i>
                    <Link to="/">Home</Link>
                    </li>
                    <li class="nav-item ms-3 fs-5 navbar-brand">
                    <i class="ri-file-list-3-line"></i>
                    <Link to="/Todos">My-Todos</Link>
                    </li>
                    <li class="nav-item ms-3 fs-5 navbar-brand">
                    <i class="ri-menu-add-line"></i>
                    <Link to="/Add-Todos">Add-Todos</Link>
                    </li>
                    <li class="nav-item ms-3 fs-5 navbar-brand">
                    <i class="ri-edit-2-fill"></i>
                    <Link to="/Update">Update</Link>
                    </li>
                    <li class="nav-item ms-3 fs-5 navbar-brand">
                    <i class="ri-delete-bin-5-line"></i>
                    <Link to="/Delete">Delete</Link>
                    </li>

                </ul>
            </div>
            </nav>



            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Todos" element={<Todo/>}/>
                <Route path="/Add-Todos" element={<AddTodo/>}/>
                <Route path="/Update" element={<UpdateTodo/>}/>
                <Route path="/Delete" element={<DeleteTodo/>}/>
            </Routes>
            <div className="footer">
            <p>&copy; 2023 Task Train. All rights reserved.</p>

            </div>

        </Router>
    )
}

export default Navbar;