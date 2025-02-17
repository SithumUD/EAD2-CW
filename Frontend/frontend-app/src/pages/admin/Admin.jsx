import React from "react";
import { Link } from "react-router-dom";
import { LogOut, Briefcase, Car, Users, Star, Map, Settings } from "lucide-react";

function Admin() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-500 to-cyan-600 shadow-md p-4 flex justify-between items-center">
        <Link className="text-white text-2xl font-semibold" to="/admin">
          Admin Dashboard
        </Link>
        <Link to="/home" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <LogOut size={20} /> Logout
        </Link>
      </nav>

      {/* Main Admin Page Content */}
      <div className="container mx-auto mt-10 p-4">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">Admin Control Panel</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Manage Bookings */}
          <AdminCard title="Manage Bookings" text="View and manage all customer bookings." link="/bookings" Icon={Briefcase} />
          {/* Manage Vehicles */}
          <AdminCard title="Manage Vehicles" text="Update and manage available vehicles." link="/vehicles" Icon={Car} />
          {/* Manage Employees */}
          <AdminCard title="Manage Employees" text="Handle employee information and schedules." link="/employees" Icon={Users} />
          {/* Manage Reviews */}
          <AdminCard title="Manage Reviews" text="View and respond to customer reviews." link="/reviews" Icon={Star} />
          {/* Manage Tour Fleets */}
          <AdminCard title="Manage Tour Fleets" text="Manage bookings and tours with Tour session fleets." link="/fleets" Icon={Map} disabled />
          {/* Manage Settings */}
          <AdminCard title="Manage Settings" text="Update system settings and preferences." link="#" Icon={Settings} disabled />
        </div>
      </div>
    </>
  );
}

function AdminCard({ title, text, link, Icon, disabled = false }) {
  return (
    <div className={`bg-white shadow-lg rounded-xl p-6 text-center ${disabled ? "opacity-50" : "hover:shadow-xl transition"}`}>
      <Icon size={40} className="text-blue-500 mx-auto mb-4" />
      <h5 className="text-xl font-semibold text-gray-800">{title}</h5>
      <p className="text-gray-600 mb-4">{text}</p>
      <Link
        to={link}
        className={`px-4 py-2 rounded-lg text-white ${disabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
        tabIndex={disabled ? "-1" : undefined}
        aria-disabled={disabled}
      >
        {disabled ? "Unavailable" : `Go to ${title.split(" ")[1]}`}
      </Link>
    </div>
  );
}

export default Admin;
