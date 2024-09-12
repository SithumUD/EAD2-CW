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
        setReview({...review, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8084/review-api/reviews", review);
        navigate("/reviews");
    };

    // Function to clear the form
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
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    
                    {/* Introduction Section */}
                    <h2 className="text-center m-4">We Value Your Feedback!</h2>
                    <p className="text-center mb-4">
                        At Saman Tours, we strive to provide the best experiences for our customers.
                        Your feedback helps us improve and deliver top-notch services. Whether it's a
                        compliment, suggestion, or issue, we would love to hear from you!
                    </p>
                    
                    {/* Review Form */}
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">Email</label>
                            <input type="text" className="form-control" placeholder="Enter your email" name="email" value={email} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Subject" className="form-label">Subject</label>
                            <input type="text" className="form-control" placeholder="Enter your subject" name="subject" value={subject} onChange={(e) => onInputChange(e)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Description" className="form-label">Description</label>
                            <textarea className="form-control" placeholder="Enter your description" name="description" value={description} onChange={(e) => onInputChange(e)}></textarea>
                        </div>

                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                        {/* Clear button to reset the form */}
                        <button type="button" className="btn btn-outline-danger mx-2" onClick={onClear}>
                            Clear
                        </button>
                    </form>

                </div>

                <div className="text-center mt-4 p-4">
                    <Link className="btn btn-outline-secondary" to="/home">
                        Go Back
                    </Link>
                </div>
            </div>
        </div>
        
        <footer className="bg-dark text-white text-center py-3 mt-auto">
            <div className="container">
                <p className="mb-0">&copy; {new Date().getFullYear()} Saman Tours. All rights reserved.</p>
            </div>
        </footer>
        </>
    )
}
