import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from 'react-icons/fa'; // Import icons

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8081/employee-api/employees/login", {
        email,
        password,
      });

      if (response.status === 200) {
        navigate("/admin");
      }
    } catch (error) {
      setMessage("Invalid email or password");
    }
  };

  return (
    <>
      <div className="container-fluid d-flex flex-column min-vh-100">
        <div className="row justify-content-center flex-grow-1">
          <div className="col-lg-6 col-md-8">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
              <div className="card-header text-center">
                <h3 className="text-primary font-weight-light my-4">Employee Login</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  {/* Email Input */}
                  <div className="mb-4">
                    <div className="input-group">
                      <span className="input-group-text bg-primary text-white"><FaEnvelope /></span>
                      <input
                        required
                        autoComplete="off"
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Password Input */}
                  <div className="mb-4">
                    <div className="input-group">
                      <span className="input-group-text bg-primary text-white"><FaLock /></span>
                      <input
                        required
                        autoComplete="off"
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Error Message */}
                  {message && <div className="alert alert-danger text-center mb-4">{message}</div>}

                  {/* Submit Button */}
                  <div className="d-grid gap-2 mb-4">
                    <button type="submit" className="btn btn-primary btn-lg">Sign In</button>
                  </div>
                </form>
              </div>

              {/* Breach Button */}
              <div className="card-footer text-center py-4">
                <Link className="btn btn-outline-dark btn-lg" to="/admin">
                  Breach
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-dark text-white text-center py-3 mt-auto">
          <div className="container">
            <p className="mb-0">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Login;
