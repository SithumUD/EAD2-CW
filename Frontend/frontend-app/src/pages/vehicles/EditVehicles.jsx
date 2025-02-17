import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditVehicle() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [vehicle, setVehicle] = useState({
    name: "",
    type: "",
    nseats: "",
    status: ""
  });

  const { name, type, nseats, status } = vehicle;

  const onInputChange = (e) => {
    setVehicle({ ...vehicle, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadVehicle();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8083/vehicle-api/vehicles/${id}`, vehicle);
    navigate("/vehicles");
  };

  const loadVehicle = async () => {
    const result = await axios.get(`http://localhost:8083/vehicle-api/vehicles/${id}`);
    setVehicle(result.data);
  };

  return (
    <div className="container-fluid d-flex flex-column min-vh-100">
      <div className="row justify-content-center flex-grow-1">
        <div className="col-lg-8 col-md-10">
          <div className="card shadow-lg border-0 rounded-lg mt-5">
            <div className="card-header text-center bg-primary text-white">
              <h3 className="font-weight-light my-4">Edit Vehicle</h3>
            </div>
            <div className="card-body">
              <form onSubmit={onSubmit}>
                {/* Vehicle Name */}
                <div className="mb-3">
                  <label htmlFor="Name" className="form-label">
                    Vehicle Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter vehicle name"
                    name="name"
                    value={name}
                    onChange={onInputChange}
                    required
                  />
                </div>

                {/* Vehicle Type */}
                <div className="mb-3">
                  <label htmlFor="Type" className="form-label">
                    Vehicle Type
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter vehicle type"
                    name="type"
                    value={type}
                    onChange={onInputChange}
                    required
                  />
                </div>

                {/* Number of Seats */}
                <div className="mb-3">
                  <label htmlFor="Seats" className="form-label">
                    Number of Seats
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter number of seats"
                    name="nseats"
                    value={nseats}
                    min="1"
                    max="40"
                    onChange={onInputChange}
                    required
                  />
                </div>

                {/* Vehicle Status */}
                <div className="mb-3">
                  <label htmlFor="Status" className="form-label">
                    Vehicle Status
                  </label>
                  <select
                    className="form-control"
                    name="status"
                    value={status}
                    onChange={onInputChange}
                    required
                  >
                    <option value="">Select status</option>
                    <option value="available">Available</option>
                    <option value="unavailable">Unavailable</option>
                  </select>
                </div>

                {/* Submit and Cancel Buttons */}
                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-success btn-lg">
                    Update Vehicle
                  </button>
                  <Link to="/vehicles" className="btn btn-outline-danger btn-lg">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <div className="container">
          <p className="mb-0">&copy; {new Date().getFullYear()} Vehicle Registration System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
