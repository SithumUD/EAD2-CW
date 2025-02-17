import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import BookingNavbar from "../../layout/bookings/BookingNavbar";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    const result = await axios.get("http://localhost:8082/booking-api/bookings");
    setBookings(result.data);
  };

  const deleteBooking = async (id) => {
    await axios.delete(`http://localhost:8082/booking-api/bookings/${id}`);
    loadBookings();
  };

  return (
    <>
      {/* Navbar */}
      <BookingNavbar />

      {/* Main Content */}
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Manage Bookings
          </h2>

          {/* Table */}
          <div className="overflow-x-auto rounded-lg shadow-md">
            <table className="min-w-full bg-white divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Booking ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Budget
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Pax Count
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Arrival Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Visiting Days
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {bookings.map((booking, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition duration-300">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {booking.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {booking.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {booking.budget}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {booking.packCount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {booking.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {booking.days}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link
                        to={`/bookings/view/${booking.id}`}
                        className="text-indigo-600 hover:text-indigo-900 mr-2"
                      >
                        View
                      </Link>
                      <Link
                        to={`/bookings/edit/${booking.id}`}
                        className="text-green-600 hover:text-green-900 mr-2"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteBooking(booking.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Go Back Button */}
          <div className="text-center mt-6">
            <Link
              to="/admin"
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