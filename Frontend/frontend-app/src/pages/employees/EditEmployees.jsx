import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditEmployee(){

    let navigate= useNavigate()
    const {id}= useParams()
    
    const [employee, setEmployee]= useState({
        name: "",
        email: "",
        password: "",
        role: "",
        status: ""
    });

    const{name, email, password, role, status}=employee

    const onInputChange=(e)=>{
        setEmployee({...employee, [e.target.name]: e.target.value})
    };

    useEffect(()=>{
        loadEmployee()
    }, []);

    const onSubmit =async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8081/employee-api/employees/${id}`, employee)
        navigate("/employees")
    }

    const loadEmployee = async ()=>{
        const result = await axios.get(`http://localhost:8081/employee-api/employees/${id}`)
        setEmployee(result.data)
    }
    
    return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Edit Employee</h2>

                <form action="" onSubmit={(e) => onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            Name
                        </label>
                        <input type="text" className="form-control" placeholder="Enter employee name" name="name"   value={name} onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">
                            Email
                        </label>
                        <input type="text" className="form-control" placeholder="Enter employee email address" name="email"   value={email} onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Password" className="form-label">
                            Password
                        </label>
                        <input type="text" className="form-control" placeholder="Enter employee password" name="password"     value={password} onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Role" className="form-label">
                            Role
                        </label>
                        <select
                            className="form-control"
                            name="role"
                            value={role}
                            onChange={(e) => onInputChange(e)}
                        >
                            <option value="">Select a role</option>
                            <option value="admin">Admin</option>
                            <option value="recipient">Recipient</option>
                            <option value="manager">Manager</option>
                            <option value="staff">Staff</option>
                        </select>
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
                            <option value="Active">Active</option>
                            <option value="Disabled">Disabled</option>
                        </select>
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