import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewVehicle() {
    const [vehicle, setVehicle] = useState({
        name: "",
        type: "",
        status: "",
        nseats: ""
    });

    const { id } = useParams();

    useEffect(() => {
        loadVehicle();
    }, []); 

    const loadVehicle = async () => {
        const result = await axios.get(`http://localhost:8083/vehicle-api/vehicles/${id}`);
        setVehicle(result.data);
    };

    return (
        <div className="container-fluid px-4">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6 col-xl-4">
                    <div className="card shadow-lg rounded-lg">
                        <div className="card-header bg-primary text-white text-center">
                            <h3>Vehicle Details</h3>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-center mb-4">
                                Vehicle ID: {vehicle.id}
                            </h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <strong>Vehicle Name:</strong> {vehicle.name}
                                </li>
                                <li className="list-group-item">
                                    <strong>Type:</strong> {vehicle.type}
                                </li>
                                <li className="list-group-item">
                                    <strong>Status:</strong>{" "}
                                    <span
                                        className={`badge ${
                                            vehicle.status === "available"
                                                ? "bg-success"
                                                : "bg-danger"
                                        }`}
                                    >
                                        {vehicle.status}
                                    </span>
                                </li>
                                <li className="list-group-item">
                                    <strong>Seats:</strong> {vehicle.nseats}
                                </li>
                            </ul>
                        </div>
                        <div className="card-footer text-center">
                            <Link className="btn btn-outline-primary btn-lg" to="/vehicles">
                                Back to Vehicles
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
