import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReviewNavbar from '../../layout/reviews/ReviewNavbar'; 

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    try {
      const result = await axios.get("http://localhost:8084/review-api/reviews");
      setReviews(result.data);
    } catch (error) {
      console.error("Error fetching reviews", error);
    }
  };

  const deleteReview = async (id) => {
    try {
      await axios.delete(`http://localhost:8084/review-api/reviews/${id}`);
      loadReviews();
    } catch (error) {
      console.error("Error deleting review", error);
    }
  };

  return (
    <>
      <ReviewNavbar />
      <div className="container-fluid d-flex flex-column min-vh-100">
        <div className="row justify-content-center flex-grow-1">
          <div className="col-lg-10 col-md-12">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
              <div className="card-header text-center bg-primary text-white">
                <h3 className="font-weight-light my-4">Customer Reviews</h3>
                <p className="text-light">Below are the reviews from our valued customers!</p>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Email</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Description</th>
                        <th scope="col">Date</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reviews.map((review, index) => (
                        <tr key={review.id}>
                          <th scope="row">{index + 1}</th>
                          <td>{review.email}</td>
                          <td>{review.subject}</td>
                          <td>{review.description}</td>
                          <td>{new Date(review.date).toLocaleDateString()}</td>
                          <td>
                            <Link
                              to={`/reviews/view/${review.id}`}
                              className="btn btn-sm btn-outline-primary mx-2"
                            >
                              View
                            </Link>
                            <button
                              className="btn btn-sm btn-outline-danger mx-2"
                              onClick={() => deleteReview(review.id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-4 p-4">
          <Link className="btn btn-outline-secondary" to="/admin">
            Go Back
          </Link>
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
