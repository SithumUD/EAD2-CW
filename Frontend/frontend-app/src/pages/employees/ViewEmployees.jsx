import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewEmployee() {

    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        password: "",
        role: "",
        status: ""
    });

    const { id } = useParams();

    useEffect(() => {
        loadEmployee();
    }, []); 

    const loadEmployee = async () => {
        const result = await axios.get(`http://localhost:8081/employee-api/employees/${id}`);
        console.log(result.data); 
        setEmployee(result.data);
    };
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Employee Details</h2>
                    <div className="card">
                        <div className="card-header">
                            Details of employee id:
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Employee Name:</b> {employee.name}
                                </li>
                                <li className="list-group-item">
                                    <b>Description:</b> {employee.email}
                                </li>
                                <li className="list-group-item">
                                    <b>Password:</b> {employee.password}
                                </li>
                                <li className="list-group-item">
                                    <b>Role:</b> {employee.role}
                                </li>
                                <li className="list-group-item">
                                    <b>Status:</b> {employee.status}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to="/employees">Back to Home</Link>
                </div>
            </div>
        </div>
    );
}