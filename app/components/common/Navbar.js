import React from "react";
import { Link } from "react-router";

const Navbar = () => (
  <nav style={{ marginBottom: 0 }} className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">Education Exchange</Link>
      </div>
      <ul className="nav navbar-nav">
        <li className={location.pathname === "/" && "active"}>
          <Link to="/login">Login</Link>
        </li>
        <li className={location.pathname === "/favorites" && "active"}>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </div>
  </nav>
);



export default Navbar;
