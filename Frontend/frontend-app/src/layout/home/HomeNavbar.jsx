import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomeNavbar() {
  return (

  <>
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        
          <Link className="navbar-brand" to="/home">
            Saman Tours
          </Link>
          <div>
          <Link className="btn btn-outline-light m-4" to="/home/reviews">
            Review Us
          </Link>
          <Link className="btn btn-outline-light m-4" to="/login">
            Employee
          </Link>
          </div>

        </div>
      </nav>
    </div>
    
  </>
  );
}

export default HomeNavbar;