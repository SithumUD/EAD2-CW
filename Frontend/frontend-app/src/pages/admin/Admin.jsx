import React from 'react'
import { Link } from "react-router-dom";

function Admin() {
  return (
    <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/items">
            Welcome
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link className="btn btn-outline-dark" to="/bookings">
            Manage Bookings
          </Link>
          <Link className="btn btn-outline-dark" to="/vehicles">
            Manage Vehicles
          </Link>
          <Link className="btn btn-outline-dark" to="/employees">
            Manage Employees
          </Link>

        </div>
      </nav>
    <div>Admin page goes here</div>
    </>
  )
}

export default Admin