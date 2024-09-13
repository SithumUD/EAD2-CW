import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddFleet(){



    
    const [vehicles, setVehicles]=useState([]);
    useEffect(()=>{
        console.log("code with binal");
        loadVehicles();
    }, [])
    const loadVehicles= async () => {
        const result =await axios.get("http://localhost:8083/vehicle-api/available-vehicles");
        console.log(result.data); 
        setVehicles(result.data);
    }

    const [bookings, setBookings]=useState([]);
    useEffect(()=>{
        console.log("code with binal");
        loadBookings();
    }, [])
    const loadBookings= async () => {
        const result =await axios.get("http://localhost:8082/booking-api/bookings");
        console.log(result.data); 
        setBookings(result.data);
    }

    const [employees, setEmployees]=useState([]);
    useEffect(()=>{
        console.log("code with binal");
        loadEmployees();
    }, [])
    const loadEmployees= async () => {
        const result =await axios.get("http://localhost:8081/employee-api/available-guides");
        console.log(result.data); 
        setEmployees(result.data);
    }




    let navigate= useNavigate()
    
    const [fleet, setFleet]= useState({
        id: "",
        description: "",
        guide1Id: "",
        guide2Id: "",
        vehicle1Id: "",
        vehicle2Id: "",
        booking1Id: "",
        booking2Id: "",
        booking3Id: "",
        booking4Id: "",
        date: "",
        nDays: ""
    });

    const{id, description, guide1Id, guide2Id, vehicle1Id, vehicle2Id, booking1Id, booking2Id, booking3Id, booking4Id, date, nDays}=fleet

    const onInputChange=(e)=>{
        setFleet({...fleet, [e.target.name]: e.target.value})
    };

    const onSubmit =async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8085/fleet-api/fleets", fleet)
        navigate("/fleets")
    }
    
    return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Register Fleet</h2>

                <form action="" onSubmit={(e) => onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="Fleet Description" className="form-label">
                            Fleet Description
                        </label>
                        <input type="text" className="form-control" placeholder="Enter fleet description" name="description"   value={description} onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Guide No1 Id" className="form-label">
                            Guide No1 Id
                        </label>
                        <select
                            className="form-control"
                            name="guide1Id"
                            value={guide1Id}
                            onChange={(e) => onInputChange(e)}
                        >
                            <option value="">Select a guide id</option>
                            {employees.map((employee) => (
                                <option key={employee.id} value={employee.id}>
                                    {employee.id} - {employee.name} ({employee.email})
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Guide No2 Id" className="form-label">
                        Guide No2 Id
                        </label>
                        <select
                            className="form-control"
                            name="guide2Id"
                            value={guide2Id}
                            onChange={(e) => onInputChange(e)}
                        >
                            <option value="">Select a guide id</option>
                            {employees.map((employee) => (
                                <option key={employee.id} value={employee.id}>
                                    {employee.id} - {employee.name} ({employee.email})
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Vehicle No1 Id" className="form-label">
                        Vehicle No1 Id
                        </label>
                        <select
                            required
                            className="form-control"
                            name="vehicle1Id"
                            value={vehicle1Id}
                            onChange={(e) => onInputChange(e)}
                        >
                            <option value="">Select a vehicle id</option>
                            {vehicles.map((vehicle) => (
                                <option key={vehicle.id} value={vehicle.id}>
                                    {vehicle.id} - {vehicle.name} ({vehicle.type})
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Vehicle No2 Id" className="form-label">
                            Vehicle No2 Id
                        </label>
                        <select
                            className="form-control"
                            name="vehicle2Id"
                            value={vehicle2Id}
                            onChange={(e) => onInputChange(e)}
                        >
                            <option value="">Select a vehicle id</option>
                            {vehicles.map((vehicle) => (
                                <option key={vehicle.id} value={vehicle.id}>
                                    {vehicle.id} - {vehicle.name} ({vehicle.type})
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Booking No1 Id" className="form-label">
                        Booking No1 Id
                        </label>
                        <select
                            required
                            className="form-control"
                            name="booking1Id"
                            value={booking1Id}
                            onChange={(e) => onInputChange(e)}
                        >
                            <option value="">Select a booking id</option>
                            {bookings.map((booking) => (
                                <option key={booking.id} value={booking.id}>
                                    {booking.id} - {booking.budget} ({booking.days+"-pax"}) on {booking.date}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Guide No2 Id" className="form-label">
                        Booking No2 Id
                        </label>
                        <select
                            className="form-control"
                            name="booking2Id"
                            value={booking2Id}
                            onChange={(e) => onInputChange(e)}
                        >
                            <option value="">Select a booking id</option>
                            {bookings.map((booking) => (
                                <option key={booking.id} value={booking.id}>
                                    {booking.id} - {booking.budget} ({booking.days+"-pax"}) on {booking.date}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Guide No2 Id" className="form-label">
                        Booking No3 Id
                        </label>
                        <select
                            className="form-control"
                            name="booking3Id"
                            value={booking3Id}
                            onChange={(e) => onInputChange(e)}
                        >
                            <option value="">Select a booking id</option>
                            {bookings.map((booking) => (
                                <option key={booking.id} value={booking.id}>
                                    {booking.id} - {booking.budget} ({booking.days+"-pax"}) on {booking.date}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Guide No2 Id" className="form-label">
                        Booking No4 Id
                        </label>
                        <select
                            className="form-control"
                            name="booking4Id"
                            value={booking4Id}
                            onChange={(e) => onInputChange(e)}
                        >
                            <option value="">Select a booking id</option>
                            {bookings.map((booking) => (
                                <option key={booking.id} value={booking.id}>
                                    {booking.id} - {booking.budget} ({booking.days+"-pax"}) on {booking.date}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Tour days" className="form-label">
                        Tour days
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter tour days"
                            name="nDays"
                            value={nDays}
                            min="1"
                            max="8"
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Tour date" className="form-label">
                        Tour date
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            placeholder="Enter tour date"
                            name="date"
                            value={date}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>

                    <button type="submit" className="btn btn-outline-primary">
                        Submit
                    </button>
                    <Link className="btn btn-outline-danger mx-2" to="/fleets">
                        Cancel
                    </Link>
                </form>
            </div>
        </div>
    </div>
    )
}