import React, { useState } from "react";
import axios from "axios"; // Axios for HTTP requests
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

function Login() {
  // State for storing email, password, and any login message
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form refresh
    try {
      // Make a POST request to Spring Boot backend for login
      const response = await axios.post("http://localhost:8081/employee-api/employees/login", {
        email,
        password
      });

      // If login is successful, redirect to /admin page
      if (response.status === 200) {
        navigate("/admin"); // Redirect to the admin page
      }
    } catch (error) {
      // If login fails, show an error message
      setMessage("Invalid email or password");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Employee Login</h2>
            <div className="card">
              <form onSubmit={handleSubmit}> {/* Attach handleSubmit to form */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    required
                    autoComplete="off"
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Update email state
                  />
                  <label className="form-label" htmlFor="email">Email address</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    required
                    autoComplete="off"
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Update password state
                  />
                  <label className="form-label" htmlFor="password">Password</label>
                </div>

                <div className="row mb-4">
                  <div className="col">
                    <a href="#!">Forgot password?</a>
                  </div>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary btn-block mb-4 w-50">
                    Sign in
                  </button>
                </div>

                {/* Display message based on login attempt */}
                {message && <div className="text-center"><p>{message}</p></div>}

                <div className="text-center">
                  <p>or sign up with:</p>
                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-google"></i>
                  </button>
                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-github"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Link className="btn btn-outline-dark" to="/admin">
        Login
      </Link>
    </>
  );
}

export default Login;
