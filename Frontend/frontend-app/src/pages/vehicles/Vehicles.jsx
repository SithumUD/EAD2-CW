import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import VehicleNavbar from '../../layout/vehicles/VehicleNavbar';

export default function Vehicles(){
    const [vehicles, setVehicles]=useState([]);
    const {id}= useParams()

    useEffect(()=>{
        console.log("code with binal");
        loadVehicles();
    }, [])

    const loadVehicles= async () => {
        const result =await axios.get("http://localhost:8083/vehicle-api/vehicles");
        console.log(result.data); 
        setVehicles(result.data);
    }

    const deleteVehicle= async(id)=>{
        await axios.delete(`http://localhost:8083/vehicle-api/vehicles/${id}`)
        loadVehicles();
    }

    return(

        <>
        <VehicleNavbar/>
        <div className='container'>

        <div className="input-group rounded">
            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <span className="input-group-text border-0" id="search-addon">
                    <i className="fas fa-search"></i>
                    </span>
            </div>
            
            <div className='py-4'>
            <table className="table border shadow">
                <thead>
                <tr>
                    <th scope="col">Vehicle ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Status</th>
                    <th scope="col">Seats</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    vehicles.map((vehicle, index)=>(
                                            <tr key={index}>
                                                <th scope="row">{index+1}</th>
                                                <td>{vehicle.name}</td>
                                                <td>{vehicle.type}</td>
                                                <td>{vehicle.status}</td>
                                                <td>{vehicle.nseats}</td>
                                                <td>
                                                    <Link className='btn btn-primary mx-2' to={`/vehicles/view/${vehicle.id}`}>
                                                        View
                                                    </Link>
                                                    <Link className="btn btn-outline-primary mx-2" to={`/vehicles/edit/${vehicle.id}`}>
                                                        Edit
                                                    </Link>
                                                    <button className='btn btn-danger mx-2' onClick={()=>deleteVehicle(vehicle.id)}>
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
        <div className="text-center mt-4 p-4">
            <Link className="btn btn-outline-secondary" to="/admin">
                Go Back
            </Link>
        </div>
        </>
    );
}