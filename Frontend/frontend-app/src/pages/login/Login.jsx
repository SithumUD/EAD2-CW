import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          </section>
            <h2 className="text-center m-4">Employee Login</h2>
            <div className="card">
              <form>
                <div data-mdb-input-init className="form-outline mb-4">
                  <input required ref={userRef} autoComplete="off" type="email" id="email" name="email" className="form-control" onChange={(e) => setUser(e.target.value)} value={user}/>
                  <label className="form-label" for="Email address">Email address</label>
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                  <input required autoComplete="off" type="password" id="password" name="password" className="form-control" onChange={(e) => setPwd(e.target.value)} value={pwd}/>
                  <label className="form-label" for="Password">Password</label>
                </div>

                <div className="row mb-4">
                  <div className="col d-flex justify-content-center">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked/>
                      <label className="form-check-label" for="form2Example31">{" "} Remember me{" "}</label>
                    </div>
                  </div>

                  <div className="col">
                    <a href="#!">Forgot password?</a>
                  </div>
                </div>

                <div className="text-center">
                  <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4 w-50">
                    Sign in
                  </button>
                </div>

                <div className="text-center">
                  <p>or sign up with:</p>
                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </button>

                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-google"></i>
                  </button>

                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>

                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-github"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Link className="btn btn-outline-dark" to="/admin">
        Login
      </Link>
    </>
  );
}

export default Login;
