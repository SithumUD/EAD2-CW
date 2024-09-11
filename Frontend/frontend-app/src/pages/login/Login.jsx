import React from 'react'
import { Link } from "react-router-dom";

function Login() {
  return (
    
    <>
    <div>Login page goes here</div>
          <Link className="btn btn-outline-dark" to="/admin">
            Login
          </Link>
    </>


  )
}

export default Login