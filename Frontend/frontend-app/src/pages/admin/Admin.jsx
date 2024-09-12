import React from 'react';
import { Link } from "react-router-dom";

function Admin() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/admin">
            Admin Dashboard
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          </button>
        </div>
      </nav>

      {/* Main Admin Page Content */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Admin Control Panel</h2>
        <div className="row">
          {/* Manage Bookings */}
          <div className="col-md-4">
            <div className="card border-light shadow-sm mb-4">
              <div className="card-body text-center">
                <h5 className="card-title">Manage Bookings</h5>
                <p className="card-text">View and manage all customer bookings.</p>
                <Link to="/bookings" className="btn btn-primary">Go to Bookings</Link>
              </div>
            </div>
          </div>
          
          {/* Manage Vehicles */}
          <div className="col-md-4">
            <div className="card border-light shadow-sm mb-4">
              <div className="card-body text-center">
                <h5 className="card-title">Manage Vehicles</h5>
                <p className="card-text">Update and manage available vehicles.</p>
                <Link to="/vehicles" className="btn btn-primary">Go to Vehicles</Link>
              </div>
            </div>
          </div>
          
          {/* Manage Employees */}
          <div className="col-md-4">
            <div className="card border-light shadow-sm mb-4">
              <div className="card-body text-center">
                <h5 className="card-title">Manage Employees</h5>
                <p className="card-text">Handle employee information and schedules.</p>
                <Link to="/employees" className="btn btn-primary">Go to Employees</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Manage Reviews */}
          <div className="col-md-4">
            <div className="card border-light shadow-sm mb-4">
              <div className="card-body text-center">
                <h5 className="card-title">Manage Reviews</h5>
                <p className="card-text">View and respond to customer reviews.</p>
                <Link to="/reviews" className="btn btn-primary">Go to Reviews</Link>
              </div>
            </div>
          </div>
          
          {/* View Reports - Disabled */}
          <div className="col-md-4">
            <div className="card border-light shadow-sm mb-4">
              <div className="card-body text-center">
                <h5 className="card-title">View Reports</h5>
                <p className="card-text">Generate and view performance reports.</p>
                <Link to="#" className="btn btn-primary disabled" tabIndex="-1" aria-disabled="true">Go to Reports</Link>
              </div>
            </div>
          </div>
          
          {/* Manage Settings - Disabled */}
          <div className="col-md-4">
            <div className="card border-light shadow-sm mb-4">
              <div className="card-body text-center">
                <h5 className="card-title">Manage Settings</h5>
                <p className="card-text">Update system settings and preferences.</p>
                <Link to="#" className="btn btn-primary disabled" tabIndex="-1" aria-disabled="true">Go to Settings</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Admin;