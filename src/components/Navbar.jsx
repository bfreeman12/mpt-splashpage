import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ path }) => {
  console.log(path);
  return (
    <div className="nav">
      <h1 className="nav-title">MDT Portal</h1>

    </div>
  );
};

export default Navbar;
