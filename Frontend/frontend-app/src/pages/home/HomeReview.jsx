import React from 'react'
import { Link } from "react-router-dom";

function HomeReview() {
  return (
    <>
    <div>Review goes here</div>
    <Link className="btn btn-outline-dark" to="/reviews/add">
    Add a Review
    </Link>
    </>
  )
}

export default HomeReview