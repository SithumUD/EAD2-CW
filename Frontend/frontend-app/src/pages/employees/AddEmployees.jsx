import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddEmployee(){

    let navigate= useNavigate()
    
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

    const onSubmit =async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8081/employee-api/employees", employee)
        navigate("/employees")
    }
    
    return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Register Employee</h2>

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
                        <input type="text" className="form-control" placeholder="Enter employee email" name="email"   value={email} onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Password" className="form-label">
                            Password
                        </label>
                        <input type="password" className="form-control" placeholder="Enter employee password" name="password"         value={password} onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Role" className="form-label">
                            Role
                        </label>
                        <input type="text" className="form-control" placeholder="Enter employee role" name="role"         value={role} onChange={(e)=>onInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Status" className="form-label">
                            Status
                        </label>
                        <input type="text" className="form-control" placeholder="Enter employee status" name="status"         value={status} onChange={(e)=>onInputChange(e)}/>
                    </div>

                    <button type="submit" className="btn btn-outline-primary">
                        Submit
                    </button>
                    <Link className="btn btn-outline-danger mx-2" to="/employees">
                        Cancel
                    </Link>
                </form>
            </div>
        </div>
    </div>
    )
}