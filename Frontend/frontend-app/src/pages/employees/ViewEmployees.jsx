import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewEmployee() {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    status: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    const result = await axios.get(`http://localhost:8081/employee-api/employees/${id}`);
    setEmployee(result.data);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Employee Details
        </h2>

        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6">
          {/* Header */}
          <div className="text-center mb-6">
            <p className="text-lg font-medium text-gray-700">Details of Employee ID: {id}</p>
          </div>

          {/* Employee Details */}
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-600">Name:</span>
              <span className="text-sm text-gray-900">{employee.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-600">Email:</span>
              <span className="text-sm text-gray-900">{employee.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-600">Password:</span>
              <span className="text-sm text-gray-900">{employee.password}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-600">Role:</span>
              <span className="text-sm text-gray-900">{employee.role}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-600">Status:</span>
              <span className="text-sm text-gray-900">{employee.status}</span>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-6 text-center">
            <Link
              to="/employees"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
            >
              Back to Employees
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}