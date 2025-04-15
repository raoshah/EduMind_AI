import React from "react";
import {
  FaHome,
  FaBookOpen,       // for Topics
  FaCog,              // for Settings
  FaUserCircle        // for Profile
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./BottomNav.css";

const BottomNav = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="bottom-nav">
      <Link to="/" className={`nav-item ${path === "/" ? "active" : ""}`}>
        <FaHome />
        <span>Home</span>
      </Link>

      <Link to="/topics" className={`nav-item ${path === "/topics" ? "active" : ""}`}>
        <FaBookOpen />
        <span>Topics</span>
      </Link>

      <Link to="/setting" className={`nav-item ${path === "/setting" ? "active" : ""}`}>
        <FaCog />
        <span>Settings</span>
      </Link>

      <Link to="/profile" className={`nav-item ${path === "/profile" ? "active" : ""}`}>
        <FaUserCircle />
        <span>Profile</span>
      </Link>
    </nav>
  );
};

export default BottomNav;
