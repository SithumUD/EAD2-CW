import React from 'react'
import { Link } from "react-router-dom";
import HomeNavbar from '../../layout/home/HomeNavbar'

function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <HomeNavbar />

      {/* Main Content */}
      <main className="flex-fill">
        {/* Hero Section */}
        <div className="hero bg-primary text-white text-center py-5">
          <div className="container">
            <h1 className="display-4">Welcome to Saman Tours</h1>
            <p className="lead">Discover the best tours and book your next adventure with us!</p>
            <Link className="btn btn-light btn-lg" to="/bookings/add">Place Bookings</Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mt-5">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="card border-light shadow-sm">
                <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="Feature 1" />
                <div className="card-body">
                  <h5 className="card-title">Feature 1</h5>
                  <p className="card-text">Description of feature 1. Why it's great and how it benefits you.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-light shadow-sm">
                <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="Feature 2" />
                <div className="card-body">
                  <h5 className="card-title">Feature 2</h5>
                  <p className="card-text">Description of feature 2. Why it's great and how it benefits you.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-light shadow-sm">
                <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="Feature 3" />
                <div className="card-body">
                  <h5 className="card-title">Feature 3</h5>
                  <p className="card-text">Description of feature 3. Why it's great and how it benefits you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <div className="container">
          <p className="mb-0">&copy; {new Date().getFullYear()} Saman Tours. All rights reserved.</p>
          <Link className="text-white" to="/contact">Contact Us</Link>
        </div>
      </footer>
    </div>
  )
}

export default Home;
