import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditVehicle(){

    let navigate= useNavigate()
    const {id}= useParams()
    
    const [vehicle, setVehicle]= useState({
        name: "",
        type: "",
        quantity: "",
        nSeats: "",
        status: ""

    });

    const{name, type, quantity, nSeats, status}=vehicle

    const onInputChange=(e)=>{
        setVehicle({...vehicle, [e.target.name]: e.target.value})
    };

    useEffect(()=>{
        loadVehicle()
    }, []);

    const onSubmit =async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8083/vehicle-api/vehicles/${id}`, vehicle)
        navigate("/vehicles")
    }

    const loadVehicle = async ()=>{
        const result = await axios.get(`http://localhost:8083/vehicle-api/vehicles/${id}`)
        console.log(result.data)
        setVehicle(result.data)
    }
    
    return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Edit Vehicle</h2>

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
                        <input type="text" className="form-control" placeholder="Enter vehicle type" name="type"   value={type} onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Quantity" className="form-label">
                            Quantity
                        </label>
                        <input type="text" className="form-control" placeholder="Enter vehicle quantity" name="quantity"     value={quantity} onChange={(e)=>onInputChange(e)}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Seats" className="form-label">
                            Seats
                        </label>
                        <input type="text" className="form-control" placeholder="Enter vehicle seats" name="nSeats"         value={nSeats} onChange={(e)=>onInputChange(e)}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Status" className="form-label">
                            Status
                        </label>
                        <input type="text" className="form-control" placeholder="Enter vehicle status" name="status"         value={status} onChange={(e)=>onInputChange(e)}/>
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