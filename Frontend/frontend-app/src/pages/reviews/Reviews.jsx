import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import ReviewNavbar from '../../layout/reviews/reviewNavBar';

export default function Reviews(){
    const [reviews, setReviews]=useState([]);
    const {id}= useParams()

    useEffect(()=>{
        console.log("testing");
        loadReviews();
    }, [])

    const loadReviews= async () => {
        const result =await axios.get("http://localhost:8084/review-api/reviews");
        console.log(result.data); 
        setReviews(result.data);
    }

    const deleteReview= async(id)=>{
        await axios.delete(`http://localhost:8084/review-api/reviews/${id}`)
        loadReviews();
    }

    return(

        <>
        <ReviewNavbar/>
        <div className='container'>
            <div className='py-4'>
            <table className="table border shadow">
                <thead>
                <tr>
                    <th scope="col">Review ID</th>
                    <th scope="col">email</th>
                    <th scope="col">subject</th>
                    <th scope="col">description</th>
                    <th scope="col">date</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    reviews.map((review, index)=>(
                                            <tr key={index}>
                                                <th scope="row">{index+1}</th>
                                                <td>{review.email}</td>
                                                <td>{review.subject}</td>
                                                <td>{review.description}</td>
                                                <td>{review.date}</td>
                                                <td>
                                                <Link className='btn btn-primary mx-2' to={`/reviews/view/${review.id}`}>
                                                        View
                                                    </Link>
                                                    <button className='btn btn-danger mx-2' onClick={()=>deleteReview(review.id)}>
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                            )) 
                }
                </tbody>
            </table>
                
            </div>
        </div>
    </>
    );
}