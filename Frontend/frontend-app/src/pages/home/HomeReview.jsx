import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeNavbar from '../../layout/home/HomeNavbar';

export default function AddReview() {

    let navigate = useNavigate();

    const [review, setReview] = useState({
        email: "",
        subject: "",
        description: ""
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

    const onClear = () => {
        setReview({
            email: "",
            subject: "",
            description: ""
        });
    };

    return (
        <>
            <HomeNavbar />
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        
                        {/* Introduction Section */}
                        <div className="text-center mb-5">
                            <h2 className="display-4 text-primary fw-bold">We Value Your Feedback!</h2>
                            <p className="lead text-muted">At Saman Tours, we aim to provide the best possible experiences for our customers. Your feedback helps us improve and deliver excellent services. Whether it's a compliment, suggestion, or issue, we'd love to hear from you!</p>
                        </div>

                        {/* Review Form */}
                        <div className="card shadow-lg rounded-3 border-0">
                            <div className="card-body p-5">
                                <form onSubmit={onSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="form-label fs-5">Email Address</label>
                                        <input
                                            type="email"
                                            className="form-control shadow-sm"
                                            placeholder="Enter your email"
                                            name="email"
                                            value={email}
                                            onChange={onInputChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="subject" className="form-label fs-5">Subject</label>
                                        <input
                                            type="text"
                                            className="form-control shadow-sm"
                                            placeholder="Enter the subject"
                                            name="subject"
                                            value={subject}
                                            onChange={onInputChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="description" className="form-label fs-5">Description</label>
                                        <textarea
                                            className="form-control shadow-sm"
                                            placeholder="Enter your feedback here"
                                            name="description"
                                            value={description}
                                            onChange={onInputChange}
                                            rows="4"
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="d-flex justify-content-between mt-4">
                                        <button type="submit" className="btn btn-primary btn-lg px-4 py-2">Submit</button>
                                        <button type="button" className="btn btn-danger btn-lg px-4 py-2" onClick={onClear}>Clear</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="text-center mt-4">
                            <Link className="btn btn-outline-primary btn-lg" to="/home">
                                Go Back
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-dark text-white text-center py-4 mt-5">
                <div className="container">
                    <p className="mb-0">&copy; {new Date().getFullYear()} Saman Tours. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}
