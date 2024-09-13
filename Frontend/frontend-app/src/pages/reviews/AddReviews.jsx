import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import HomeNavbar from '../../layout/home/HomeNavbar'



export default function AddReview(){

    let navigate= useNavigate()
    
    const [review, setReview]= useState({
        email: "",
        subject: "",
        description: ""
    });

    const{email, subject, description}= review

    const onInputChange=(e)=>{
        setReview({...review, [e.target.name]: e.target.value})
    };

    const onSubmit =async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8084/review-api/reviews", review)
        navigate("/reviews")
    }
    
    return (
    <>
    <HomeNavbar />
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Give us a review!</h2>

                <form action="" onSubmit={(e) => onSubmit(e)}>
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
                        <textarea className="form-control" placeholder="Enter your description" name="description" value={description} onChange={(e) => onInputChange(e)}>
                        </textarea>
                    </div>

                    <button type="submit" className="btn btn-outline-primary">
                        Submit
                    </button>
                    <Link className="btn btn-outline-danger mx-2" to="/">
                        Cancel
                    </Link>
                </form>
            </div>
        </div>
    </div>
    </>
    )
}