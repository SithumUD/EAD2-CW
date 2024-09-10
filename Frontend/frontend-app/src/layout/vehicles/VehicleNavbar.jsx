import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function VehicleNavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/vehicles">
            Vehicle List
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

          <Link className="btn btn-outline-light" to="/vehicles/add">
            Add Vehicle
          </Link>
        </div>
      </nav>
    </div>
  );
}
export default VehicleNavbar;
