import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <Link className="navbar-brand" to="/">
        Exercise Tracker
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/tracker"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Tracker
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/dashboard"
              className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
            >
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/userlogin"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
              User Login
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/createaccount"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
              Create Account
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
