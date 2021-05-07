import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

function Header() {
  return (
      <div>
    <nav className="navbar navbar-expand-lg navbar-dark justify-content-center">
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
            to="/portfolio"
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
            to="/contact"
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
    </div>
  );
}

export default Header;
