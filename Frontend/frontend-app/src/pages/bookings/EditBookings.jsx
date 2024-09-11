import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditBooking(){

    let navigate= useNavigate()
    const {id}= useParams()
    
    const [booking, setBooking]= useState({
      name: "",
      email: "",
      budget: "",
      packCount: "",
      date: "",
      days: ""
    });

    const{name, email, budget, packCount, date, days}=booking

    const onInputChange=(e)=>{
        setBooking({...booking, [e.target.name]: e.target.value})
    };

    useEffect(()=>{
        loadBooking()
    }, []);

    const onSubmit =async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8082/booking-api/bookings/${id}`, booking)
        navigate("/bookings")
    }

    const loadBooking = async ()=>{
        const result = await axios.get(`http://localhost:8082/booking-api/bookings/${id}`)
        setBooking(result.data)
    }
    
    return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Edit Booking</h2>

                <form action="" onSubmit={(e) => onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            Name
                        </label>
                        <input type="text" className="form-control" placeholder="Enter booking name" name="name"   value={name} onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">
                            Email
                        </label>
                        <input type="text" className="form-control" placeholder="Enter booking recipient" name="email"   value={email} onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Budget" className="form-label">
                            Budget
                        </label>
                        <input type="text" className="form-control" placeholder="Enter budget type" name="budget"     value={budget} onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="PackCount" className="form-label">
                            PackCount
                        </label>
                        <input type="text" className="form-control" placeholder="Enter arrival date" name="date"         value={date} onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Date" className="form-label">
                            Date
                        </label>
                        <input type="text" className="form-control" placeholder="Enter booking status" name="date"         value={date} onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Days" className="form-label">
                            Days
                        </label>
                        <input type="text" className="form-control" placeholder="Enter visiting" name="days"         value={days} onChange={(e)=>onInputChange(e)}/>
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
    )
}