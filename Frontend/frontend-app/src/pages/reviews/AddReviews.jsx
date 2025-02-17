import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeNavbar from '../../layout/home/HomeNavbar'; // Assuming this is imported from the correct path

export default function AddReview() {
  let navigate = useNavigate();

  const [review, setReview] = useState({
    email: "",
    subject: "",
    description: "",
  });

  const { email, subject, description } = review;

  const onInputChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8084/review-api/reviews", review);
    navigate("/reviews");
  };

  return (
    <>
      <HomeNavbar />
      <div className="container-fluid d-flex flex-column min-vh-100">
        <div className="row justify-content-center flex-grow-1">
          <div className="col-lg-6 col-md-8">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
              <div className="card-header text-center bg-primary text-white">
                <h3 className="font-weight-light my-4">Give us a Review!</h3>
                <p className="text-light">Your feedback helps us improve and provide a better experience!</p>
              </div>
              <div className="card-body">
                <form onSubmit={onSubmit}>
                  {/* Email Input */}
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={email}
                      onChange={onInputChange}
                      required
                    />
                  </div>

                  {/* Subject Input */}
                  <div className="mb-4">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      placeholder="Enter your subject"
                      value={subject}
                      onChange={onInputChange}
                      required
                    />
                  </div>

                  {/* Description Input */}
                  <div className="mb-4">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                      id="description"
                      name="description"
                      className="form-control"
                      placeholder="Enter your description"
                      value={description}
                      onChange={onInputChange}
                      required
                    />
                  </div>

                  {/* Buttons */}
                  <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary w-48">
                      Submit Review
                    </button>
                    <Link className="btn btn-outline-danger w-48" to="/">
                      Cancel
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-dark text-white text-center py-3 mt-auto">
          <div className="container">
            <p className="mb-0">&copy; {new Date().getFullYear()} Saman Tours. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
