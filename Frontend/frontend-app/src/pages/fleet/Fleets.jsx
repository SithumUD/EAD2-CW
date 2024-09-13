import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import FleetNavbar from '../../layout/fleets/FleetNavbar';

export default function Fleets(){
    const [fleets, setFleets]=useState([]);
    const {id}= useParams()

    useEffect(()=>{
        console.log("code with binal");
        loadFleets();
    }, [])

    const loadFleets= async () => {
        const result =await axios.get("http://localhost:8085/fleet-api/fleets");
        console.log(result.data); 
        setFleets(result.data);
    }

    const deleteFleet= async(id)=>{
        await axios.delete(`http://localhost:8085/fleet-api/fleets/${id}`)
        loadFleets();
    }

    return(

        <>
        <FleetNavbar/>
        <div className='container'>
            <div className='py-4'>
            <table className="table border shadow">
                <thead>
                <tr>
                    <th scope="col">Fleet ID</th>
                    <th scope="col">Description</th>
                    <th scope="col">Launch Date</th>
                    <th scope="col">Tour days</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    fleets.map((fleet, index)=>(
                                            <tr key={index}>
                                                <td>{fleet.id}</td>
                                                <td>{fleet.description}</td>
                                                <td>{fleet.date}</td>
                                                <td>{fleet.nDays}</td>
                                                <td>
                                                    <Link className='btn btn-primary mx-2' to={`/fleets/view/${fleet.id}`}>
                                                        View
                                                    </Link>
                                                    <Link className="btn btn-outline-primary mx-2" to={`/fleets/edit/${fleet.id}`}>
                                                        Edit
                                                    </Link>
                                                    <button className='btn btn-danger mx-2' onClick={()=>deleteFleet(fleet.id)}>
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                            )) 
                }
                </tbody>
            </table>

            {
            fleets.map((fleet, index)=>(
            <div key={index}>                                
            <div className="container">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Fleet Id: {fleet.id}</h2>
                        <div className="card">                        
                            <div className="card-header">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <b>Fleet Description:</b> {fleet.description}
                                        </li>
                                        <li className="list-group-item">
                                            <b>Tour date:</b> {fleet.date}
                                        </li>
                                        <li className="list-group-item">
                                            <b>Tour days:</b> {fleet.nDays}
                                        </li>
                                    </ul>
                            </div>

                            <div>
                                <Link className='btn btn-primary mx-2' to={`/fleets/view/${fleet.id}`}>
                                    View
                                </Link>
                                <Link className="btn btn-outline-primary mx-2" to={`/fleets/edit/${fleet.id}`}>
                                    Edit
                                </Link>
                                <button className='btn btn-danger mx-2' onClick={()=>deleteFleet(fleet.id)}>
                                    Delete
                                </button>
                            </div>

                        </div>
                </div>
                </div>

            </div>
            )) 
            }
            
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