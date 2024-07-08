import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ path }) => {
  console.log(path);
  return (
    <div className="nav">
      <h1 className="nav-title">MDT Portal</h1>
      <div className="nav-button-group">
        {path !== "/settings" ? (
          <Link className="nav-settings-button" to="/settings">
            Settings
          </Link>
        ) : (
          <Link className="nav-settings-button" to="/">
            Home
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
