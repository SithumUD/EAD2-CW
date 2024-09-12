import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import BookingNavbar from '../../layout/bookings/BookingNavbar';

export default function Bookings(){
    const [bookings, setBookings]=useState([]);
    const {id}= useParams()

    useEffect(()=>{
        console.log("code with binal");
        loadBookings();
    }, [])

    const loadBookings= async () => {
        const result =await axios.get("http://localhost:8082/booking-api/bookings");
        console.log(result.data); 
        setBookings(result.data);
    }

    const deleteBooking= async(id)=>{
        await axios.delete(`http://localhost:8082/booking-api/bookings/${id}`)
        loadBookings();
    }

    return(

        <>
        <BookingNavbar/>
        <div className='container'>
            <div className='py-4'>
            <table className="table border shadow">
                <thead>
                <tr>
                    <th scope="col">Booking ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Budget</th>
                    <th scope="col">Pax count</th>
                    <th scope="col">Arrival date</th>
                    <th scope="col">Visiting days</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    bookings.map((booking, index)=>(
                                            <tr key={index}>
                                                <th scope="row">{index+1}</th>
                                                <td>{booking.name}</td>
                                                <td>{booking.email}</td>
                                                <td>{booking.budget}</td>
                                                <td>{booking.packCount}</td>
                                                <td>{booking.date}</td>
                                                <td>{booking.days}</td>
                                                <td>
                                                    <Link className='btn btn-primary mx-2' to={`/bookings/view/${booking.id}`}>
                                                        View
                                                    </Link>
                                                    <Link className="btn btn-outline-primary mx-2" to={`/bookings/edit/${booking.id}`}>
                                                        Edit
                                                    </Link>
                                                    <button className='btn btn-danger mx-2' onClick={()=>deleteBooking(booking.id)}>
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
        <div className="text-center mt-4 p-4">
            <Link className="btn btn-outline-secondary" to="/admin">
                Go Back
            </Link>
        </div>
        </>
    );
}