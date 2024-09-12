import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomeNavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        
          <Link className="navbar-brand" to="/home">
            Saman Tours
          </Link>

          <Link className="btn btn-outline-light" to="/home/reviews">
            Review Us
          </Link>

        </div>
      </nav>
    </div>
  );
}

export default HomeNavbar;