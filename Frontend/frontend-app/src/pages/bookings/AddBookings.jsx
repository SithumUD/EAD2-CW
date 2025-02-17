import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeNavbar from "../../layout/home/HomeNavbar";

export default function AddBooking() {
  const navigate = useNavigate();
  const [booking, setBooking] = useState({
    name: "",
    email: "",
    budget: "",
    packCount: "",
    date: "",
    days: "",
  });

  const { name, email, budget, packCount, date, days } = booking;

  const onInputChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8082/booking-api/bookings", booking);
    navigate("/");
  };

  const clearForm = () => {
    setBooking({
      name: "",
      email: "",
      budget: "",
      packCount: "",
      date: "",
      days: "",
    });
  };

  return (
    <>
      {/* Navbar */}
      <HomeNavbar />

      {/* Main Content */}
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Register Booking
          </h2>

          <form
            onSubmit={onSubmit}
            className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6"
          >
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={onInputChange}
                placeholder="Enter recipient name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={onInputChange}
                placeholder="Enter booking email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            {/* Budget Dropdown */}
            <div className="mb-4">
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
                Tour Type
              </label>
              <select
                id="budget"
                name="budget"
                value={budget}
                onChange={onInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="" disabled>
                  Select tour type
                </option>
                <option value="Tropical Paradise Tour">Tropical Paradise Tour</option>
                <option value="Cultural Heritage Tour">Cultural Heritage Tour</option>
                <option value="Adventure Safari">Adventure Safari</option>
              </select>
            </div>

            {/* Pack Count Field */}
            <div className="mb-4">
              <label htmlFor="packCount" className="block text-sm font-medium text-gray-700">
                Pack Count
              </label>
              <input
                type="number"
                id="packCount"
                name="packCount"
                value={packCount}
                onChange={onInputChange}
                min="1"
                max="20"
                placeholder="Enter booking pack count (1-20)"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            {/* Date Field */}
            <div className="mb-4">
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={onInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            {/* Days Field */}
            <div className="mb-4">
              <label htmlFor="days" className="block text-sm font-medium text-gray-700">
                Days
              </label>
              <input
                type="number"
                id="days"
                name="days"
                value={days}
                onChange={onInputChange}
                min="1"
                max="8"
                placeholder="Enter booking days (1-8)"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between">
              <button
                type="submit"
                className="w-full mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={clearForm}
                className="w-full ml-2 inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
              >
                Clear
              </button>
            </div>
          </form>

          {/* Go Back Button */}
          <div className="text-center mt-6">
            <Link
              to="/home"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-8">
        <div className="container mx-auto">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Saman Tours. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}