import React from "react";
import { Link } from "react-router-dom";

function Header({ onThemeToggle, isDarkMode }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          FastFood App
        </Link>
        <button
          className={`btn btn-sm ${isDarkMode ? "btn-dark" : "btn-light"}`}
          onClick={onThemeToggle}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}

export default Header;
