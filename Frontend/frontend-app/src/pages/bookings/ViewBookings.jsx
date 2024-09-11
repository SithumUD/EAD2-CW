import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewBooking() {

    const [booking, setBooking] = useState({
        name: "",
        email: "",
        budget: "",
        packCount: "",
        date: "",
        days: ""
        
    });

    const { id } = useParams();

    useEffect(() => {
        loadBooking();
    }, []); 

    const loadBooking = async () => {
        const result = await axios.get(`http://localhost:8082/booking-api/bookings/${id}`);
        console.log(result.data); 
        setBooking(result.data);
    };
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Booking Details</h2>
                    <div className="card">
                        <div className="card-header my-4">
                            Details of booking id:{booking.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Booking Name:</b> {booking.name}
                                </li>
                                <li className="list-group-item">
                                    <b>From:</b> {booking.email}
                                </li>
                                <li className="list-group-item">
                                    <b>Budget type:</b> {booking.budget}
                                </li>
                                <li className="list-group-item">
                                    <b>Pack Count:</b> {booking.packCount}
                                </li>
                                <li className="list-group-item">
                                    <b>Arrival date:</b> {booking.date}
                                </li>
                                <li className="list-group-item">
                                    <b>Visiting days:</b> {booking.days}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to="/bookings">Back to Booking</Link>
                </div>
            </div>
        </div>
    );
}