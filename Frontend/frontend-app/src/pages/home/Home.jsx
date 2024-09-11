import React from 'react'
import { Link } from "react-router-dom";
import HomeNavbar from '../../layout/home/HomeNavbar'

function Home() {
  return (
    <>
    <HomeNavbar/>
    <div>Home page goes here</div>

          <Link className="btn btn-outline-dark" to="/bookings/add">
            Place Bookings
          </Link>
    </>
  )
}

export default Home