import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import EmployeeNavbar from '../../layout/employees/EmployeeNavbar';

export default function Employees(){
    const [employees, setEmployees]=useState([]);
    const {id}= useParams()

    useEffect(()=>{
        console.log("code with binal");
        loadEmployees();
    }, [])

    const loadEmployees= async () => {
        const result =await axios.get("http://localhost:8081/employee-api/employees");
        console.log(result.data); 
        setEmployees(result.data);
    }

    const deleteEmployee= async(id)=>{
        await axios.delete(`http://localhost:8083/employee-api/employees/${id}`)
        loadEmployees();
    }

    return(

        <>
        <EmployeeNavbar/>
        <div className='container'>
            <div className='py-4'>
            <table className="table border shadow">
                <thead>
                <tr>
                    <th scope="col">Employee ID</th>
                    <th scope="col">name</th>
                    <th scope="col">email</th>
                    <th scope="col">password</th>
                    <th scope="col">role</th>
                    <th scope="col">status</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    employees.map((employee, index)=>(
                                            <tr key={index}>
                                                <th scope="row">{index+1}</th>
                                                <td>{employee.name}</td>
                                                <td>{employee.email}</td>
                                                <td>{employee.password}</td>
                                                <td>{employee.role}</td>
                                                <td>{employee.status}</td>
                                                <td>
                                                    <Link className='btn btn-primary mx-2' to={`/employees/view/${employee.id}`}>
                                                        View
                                                    </Link>
                                                    <Link className="btn btn-outline-primary mx-2" to={`/employees/edit/${employee.id}`}>
                                                        Edit
                                                    </Link>
                                                    <button className='btn btn-danger mx-2' onClick={()=>deleteEmployee(employee.id)}>
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                            )) 
                }
                </tbody>
            </table>
            </div>
        </div>
        </>
    );
}