import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddVehicle(){

    let navigate= useNavigate()
    
    const [vehicle, setVehicle]= useState({
        name: "",
        type: "",
        status: "",
        nseats: ""
    });

    const{name, type, status, nseats}=vehicle

    const onInputChange=(e)=>{
        setVehicle({...vehicle, [e.target.name]: e.target.value})
    };

    const onSubmit =async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8083/vehicle-api/vehicles", vehicle)
        navigate("/vehicles")
    }
    
    return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Register Vehicle</h2>

                <form action="" onSubmit={(e) => onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            Name
                        </label>
                        <input type="text" className="form-control" placeholder="Enter vehicle name" name="name"   value={name} onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Type" className="form-label">
                            Type
                        </label>
                        <select
                            className="form-control"
                            name="type"
                            value={type}
                            onChange={(e) => onInputChange(e)}
                        >
                            <option value="">Select vehicle type</option>
                            <option value="bus">Bus</option>
                            <option value="van">Van</option>
                            <option value="jeep">Jeep</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Seats" className="form-label">
                            Seats
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter vehicle seats"
                            name="nseats"
                            value={nseats}
                            min="1"
                            max="40"
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Status" className="form-label">
                            Status
                        </label>
                        <select
                            className="form-control"
                            name="status"
                            value={status}
                            onChange={(e) => onInputChange(e)}
                        >
                            <option value="">Select status</option>
                            <option value="available">available</option>
                            <option value="unavailable">unavailable</option>
                        </select>
                    </div>


                    <button type="submit" className="btn btn-outline-primary">
                        Submit
                    </button>
                    <Link className="btn btn-outline-danger mx-2" to="/vehicles">
                        Cancel
                    </Link>
                </form>
            </div>
        </div>
    </div>
    )
}