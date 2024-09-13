import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewFleet() {

    const [fleet, setFleet] = useState({
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

    const { id } = useParams();

    useEffect(() => {
        loadFleet();
    }, []); 

    const loadFleet = async () => {
        const result = await axios.get(`http://localhost:8085/fleet-api/fleets/${id}`);
        console.log(result.data); 
        setFleet(result.data);
    };
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Fleet Details</h2>
                    <div className="card">
                        <div className="card-header">
                            Details of fleet id:{fleet.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Fleet Description:</b> {fleet.description}
                                </li>
                                <li className="list-group-item">
                                    <b>Guide No1 Id:</b> {fleet.guide1Id}
                                </li>
                                <li className="list-group-item">
                                    <b>Guide No2 Id:</b> {fleet.guide2Id}
                                </li>
                                <li className="list-group-item">
                                    <b>Vehicle No1 Id:</b> {fleet.vehicle1Id}
                                </li>
                                <li className="list-group-item">
                                    <b>Vehicle No2 Id:</b> {fleet.vehicle2Id}
                                </li>
                                <li className="list-group-item">
                                    <b>Booking No1 Id:</b> {fleet.booking1Id}
                                </li>
                                <li className="list-group-item">
                                    <b>Booking No2 Id:</b> {fleet.booking2Id}
                                </li>
                                <li className="list-group-item">
                                    <b>Booking No3 Id:</b> {fleet.booking3Id}
                                </li>
                                <li className="list-group-item">
                                    <b>Booking No4 Id:</b> {fleet.booking4Id}
                                </li>
                                <li className="list-group-item">
                                    <b>Tour Date:</b> {fleet.date}
                                </li>
                                <li className="list-group-item">
                                    <b>Tour days:</b> {fleet.nDays}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to="/fleets">Back to Home</Link>
                </div>
            </div>
        </div>
    );
}