import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewReview() {
  const [review, setReview] = useState({
    id: "",
    email: "",
    subject: "",
    description: "",
    date: ""
  });

  const { id } = useParams();

  useEffect(() => {
    loadReview();
  }, []);

  const loadReview = async () => {
    try {
      const result = await axios.get(`http://localhost:8084/review-api/reviews/${id}`);
      setReview(result.data);
    } catch (error) {
      console.error("Error loading review", error);
    }
  };

  return (
    <div className="container-fluid d-flex flex-column min-vh-100">
      <div className="row justify-content-center flex-grow-1">
        <div className="col-lg-8 col-md-10">
          <div className="card shadow-lg border-0 rounded-lg mt-5">
            <div className="card-header text-center bg-primary text-white">
              <h3 className="font-weight-light my-4">Review Details</h3>
            </div>
            <div className="card-body">
              <div className="list-group">
                <div className="list-group-item d-flex justify-content-between align-items-center">
                  <strong>Review ID:</strong> {review.id}
                </div>
                <div className="list-group-item">
                  <strong>From:</strong> {review.email}
                </div>
                <div className="list-group-item">
                  <strong>Review Subject:</strong> {review.subject}
                </div>
                <div className="list-group-item">
                  <strong>Description:</strong> {review.description}
                </div>
                <div className="list-group-item">
                  <strong>Date:</strong> {new Date(review.date).toLocaleDateString()}
                </div>
              </div>
            </div>
            <div className="card-footer text-center">
              <Link to="/reviews" className="btn btn-outline-secondary btn-lg">
                Back to Reviews
              </Link>
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
  );
}
