import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="mainboxnavbar">
        <div className="leftnavbar">
          <h2>Abhishek Ranjan</h2>
        </div>
        <div className="rightnavbar">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
