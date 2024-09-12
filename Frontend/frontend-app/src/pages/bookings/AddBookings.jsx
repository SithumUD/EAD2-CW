import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeNavbar from '../../layout/home/HomeNavbar'

export default function AddBooking() {

    let navigate = useNavigate()

    const [booking, setBooking] = useState({
        name: "",
        email: "",
        budget: "",
        packCount: "",
        date: "",
        days: ""
    });

    const { name, email, budget, packCount, date, days } = booking;

    const onInputChange = (e) => {
        setBooking({ ...booking, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8082/booking-api/bookings", booking)
        navigate("/bookings")
    };

    // Function to clear the form
    const clearForm = () => {
        setBooking({
            name: "",
            email: "",
            budget: "",
            packCount: "",
            date: "",
            days: ""
        });
    };

    return (
        <>
            <HomeNavbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 border rounded p-4 mt-4 shadow">
                        <h2 className="text-center m-4">Register Booking</h2>

                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className="mb-3">
                                <label htmlFor="Name" className="form-label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter recipient name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Email" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter booking email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Budget" className="form-label">
                                    Budget
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter booking budget"
                                    name="budget"
                                    value={budget}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="PackCount" className="form-label">
                                    PackCount
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter booking pack count"
                                    name="packCount"
                                    value={packCount}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Date" className="form-label">
                                    Date
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter booking date"
                                    name="date"
                                    value={date}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Days" className="form-label">
                                    Days
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter booking days"
                                    name="days"
                                    value={days}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </div>

                            <button type="submit" className="btn btn-outline-primary">
                                Submit
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-danger mx-2"
                                onClick={clearForm}  // Attach the clearForm function
                            >
                                Clear
                            </button>
                        </form>
                    </div>
                </div>
                <div className="text-center mt-2 p-4">
                <Link className="btn btn-outline-secondary" to="/home">
                    Go Back
                </Link>
            </div>
            </div>
    <footer className="bg-dark text-white text-center py-3 mt-auto">
        <div className="container">
            <p className="mb-0">&copy; {new Date().getFullYear()} Saman Tours. All rights reserved.</p>
        </div>
    </footer>
        </>
    );
}
