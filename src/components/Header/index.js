import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark justify-content-center">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/home"
            className={
              window.location.pathname === "/home"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/home"
            className={
              window.location.pathname === "/portfolio"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/home"
            className={
              window.location.pathname === "/contact"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
