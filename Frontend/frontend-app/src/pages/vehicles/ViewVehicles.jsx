import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewVehicle() {

    const [vehicle, setVehicle] = useState({
        name: "",
        type: "",
        quantity: "",
        status: "",
        nseats: ""
    });

    const { id } = useParams();

    useEffect(() => {
        loadVehicle();
    }, []); 

    const loadVehicle = async () => {
        const result = await axios.get(`http://localhost:8083/vehicle-api/vehicles/${id}`);
        console.log(result.data); 
        setVehicle(result.data);
    };
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Vehicle Details</h2>
                    <div className="card">
                        <div className="card-header">
                            Details of vehicle id:{vehicle.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Vehicle Name:</b> {vehicle.name}
                                </li>
                                <li className="list-group-item">
                                    <b>Type:</b> {vehicle.type}
                                </li>
                                <li className="list-group-item">
                                    <b>Quantity:</b> {vehicle.quantity}
                                </li>
                                <li className="list-group-item">
                                    <b>Status:</b> {vehicle.status}
                                </li>
                                <li className="list-group-item">
                                    <b>Seats:</b> {vehicle.nseats}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to="/vehicles">Back to Vehicles</Link>
                </div>
            </div>
        </div>
    );
}