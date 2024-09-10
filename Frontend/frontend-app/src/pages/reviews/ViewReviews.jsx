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
        const result = await axios.get(`http://localhost:8084/review-api/reviews/${id}`);
        console.log(result.data); 
        setReview(result.data);
    };
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Review Details</h2>
                    <div className="card">
                        <div className="card-header">
                            Details of review id:{review.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>From:</b> {review.email}
                                </li>
                                <li className="list-group-item">
                                    <b>Review Subject:</b> {review.subject}
                                </li>
                                <li className="list-group-item">
                                    <b>Description:</b> {review.description}
                                </li>
                                <li className="list-group-item">
                                    <b>Date:</b> {review.date}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to="/reviews">Back to Home</Link>
                </div>
            </div>
        </div>
    );
}