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
            <div>
                <ul class="navbar-nav me-auto mb-2 fs-5">
                    <li className="logo nav-header link-dark">
                    <Link to="/">Home</Link>
                        
                    </li>
                    <li className="logo nav-header link-dark">
                    <Link to="/Todos">My-Todos</Link>
                    </li>
                    <li className="logo nav-header link-dark">
                    <Link to="/Add-Todos">Add-Todos</Link>
                    </li>
                    <li className="logo nav-header link-dark">
                    <Link to="/Update">Update</Link>
                    </li>
                    <li className="logo nav-header link-dark">
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