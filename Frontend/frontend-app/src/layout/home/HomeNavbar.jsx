import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomeNavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            Saman Tours
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link className="btn btn-outline-light" to="/home/reviews">
            Reviews
          </Link>
          <Link className="btn btn-outline-light" to="/login">
            Employee
          </Link>

        </div>
      </nav>
    </div>
  );
}
export default HomeNavbar;
