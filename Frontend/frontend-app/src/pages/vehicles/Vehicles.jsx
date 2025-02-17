import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import VehicleNavbar from '../../layout/vehicles/VehicleNavbar';

export default function Vehicles() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    loadVehicles();
  }, []);

  const loadVehicles = async () => {
    const result = await axios.get("http://localhost:8083/vehicle-api/vehicles");
    setVehicles(result.data);
  };

  const deleteVehicle = async (id) => {
    await axios.delete(`http://localhost:8083/vehicle-api/vehicles/${id}`);
    loadVehicles();
  };

  return (
    <>
      <VehicleNavbar />
      <div className="container-fluid px-4">
        {/* Search Bar */}
        <div className="my-4">
          <div className="input-group rounded">
            <input
              type="search"
              className="form-control rounded-pill shadow-sm"
              placeholder="Search Vehicles"
              aria-label="Search"
            />
            <span className="input-group-text border-0 rounded-end">
              <i className="fas fa-search text-muted"></i>
            </span>
          </div>
        </div>

        {/* Vehicle Table */}
        <div className="py-4">
          <div className="table-responsive">
            <table className="table table-hover shadow-lg rounded">
              <thead className="table-light">
                <tr>
                  <th scope="col">Vehicle ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Type</th>
                  <th scope="col">Status</th>
                  <th scope="col">Seats</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {vehicles.map((vehicle, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{vehicle.name}</td>
                    <td>{vehicle.type}</td>
                    <td>
                      <span
                        className={`badge ${
                          vehicle.status === 'available' ? 'bg-success' : 'bg-danger'
                        }`}
                      >
                        {vehicle.status}
                      </span>
                    </td>
                    <td>{vehicle.nseats}</td>
                    <td>
                      <Link
                        className="btn btn-primary btn-sm mx-1"
                        to={`/vehicles/view/${vehicle.id}`}
                      >
                        View
                      </Link>
                      <Link
                        className="btn btn-outline-primary btn-sm mx-1"
                        to={`/vehicles/edit/${vehicle.id}`}
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-danger btn-sm mx-1"
                        onClick={() => deleteVehicle(vehicle.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Go Back Button */}
        <div className="text-center mt-4 p-4">
          <Link className="btn btn-outline-secondary btn-lg" to="/admin">
            Go Back
          </Link>
        </div>
      </div>
    </>
  );
}
