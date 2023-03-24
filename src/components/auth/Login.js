import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css'

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("API_URL/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        history.push("/dashboard");
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <body class="text-center">
        <div class="container">
            <form class="form-signin" onSubmit={handleSubmit}>

            <div class="bg-login">
                <p class="icon"></p><i class="fas fa-user-alt-slash"></i><br></br>
                
                <label htmlFor="email" class="sr-only">Email or Username</label>
                <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter email/username"
                required autofocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password" class="sr-only">Password</label>
                <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="customCheck1"></input>
            <label class="custom-control-label" for="customCheck1">Remember me</label>
            </div><br></br>
            <button type="submit" className="btn btn-primary">Login</button>
            <br></br>
            <p><strong>Or</strong></p>

            <p>Don't have an account?</p>

            <div class="social-media">

                <ul>

                <li><button type="button" className="btn btn-primary"onClick={() => navigate("/register")}>Register</button></li>

                </ul>

            </div>
            
            </form>
        </div>
    </body>
  );
};

export default Login;
