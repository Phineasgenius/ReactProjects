import React from "react";

import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className=" nav-link" to="About">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;