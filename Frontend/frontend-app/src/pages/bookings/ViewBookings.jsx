import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewBooking() {
  const [booking, setBooking] = useState({
    name: "",
    email: "",
    budget: "",
    packCount: "",
    date: "",
    days: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadBooking();
  }, []);

  const loadBooking = async () => {
    const result = await axios.get(`http://localhost:8082/booking-api/bookings/${id}`);
    setBooking(result.data);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Booking Details
        </h2>

        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6">
          {/* Header */}
          <div className="text-center mb-6">
            <p className="text-lg font-medium text-gray-700">Details of Booking ID: {booking.id}</p>
          </div>

          {/* Booking Details */}
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-600">Booking Name:</span>
              <span className="text-sm text-gray-900">{booking.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-600">Email:</span>
              <span className="text-sm text-gray-900">{booking.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-600">Budget Type:</span>
              <span className="text-sm text-gray-900">{booking.budget}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-600">Pack Count:</span>
              <span className="text-sm text-gray-900">{booking.packCount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-600">Arrival Date:</span>
              <span className="text-sm text-gray-900">{booking.date}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-600">Visiting Days:</span>
              <span className="text-sm text-gray-900">{booking.days}</span>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-6 text-center">
            <Link
              to="/bookings"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
            >
              Back to Bookings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}