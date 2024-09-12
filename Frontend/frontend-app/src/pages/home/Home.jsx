import React from 'react';
import { Link } from "react-router-dom";
import HomeNavbar from '../../layout/home/HomeNavbar';

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
            <p className="mt-3">Explore our popular tour packages below!</p>
          </div>
        </div>

        {/* Tour Packages Section */}
        <div className="container mt-5">
          <div className="row text-center">
            {/* Package 1 */}
            <div className="col-md-4 mb-4">
              <div className="card border-light shadow-sm">
                <img src="https://www.covelanka.com/wp-content/uploads/2024/05/Nuwara-Eliya1-min.jpg" className="card-img-top" alt="Tropical Paradise Tour" />
                <div className="card-body">
                  <h5 className="card-title">Tropical Paradise Tour</h5>
                  <p className="card-text">
                    Explore the lush landscapes and pristine beaches of the tropical islands.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Package 2 */}
            <div className="col-md-4 mb-4">
              <div className="card border-light shadow-sm">
                <img src="https://www.covelanka.com/wp-content/uploads/2024/05/Polonnaruwa1-min.jpg" className="card-img-top" alt="Cultural Heritage Tour" />
                <div className="card-body">
                  <h5 className="card-title">Cultural Heritage Tour</h5>
                  <p className="card-text">
                    Immerse yourself in the rich history and vibrant cultures of historic cities and ancient landmarks.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Package 3 */}
            <div className="col-md-4 mb-4">
              <div className="card border-light shadow-sm">
                <img src="https://www.covelanka.com/wp-content/uploads/2024/05/Wildlife.jpg" className="card-img-top" alt="Adventure Safari" />
                <div className="card-body">
                  <h5 className="card-title">Adventure Safari</h5>
                  <p className="card-text">
                    Embark on an exhilarating safari adventure, exploring wildlife and enjoying thrilling activities in the wild.
                  </p>
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
        </div>
      </footer>
    </div>
  )
}

export default Home;
