import { useState } from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [colour, setcolour] = useState(false);
  const changecolour = () => {
    if (window.scrollY >= 360) {
      setcolour(true);
    } else {
      setcolour(false);
    }
  };
  window.addEventListener("scroll", changecolour);
  return (
    <div className={colour ? "navbar new" : "navbar"}>
      <Link to="/" className="logo">
        <h1>ADS'24</h1>
      </Link>
      <div className="buttons">
        <ul>
          <li>
            <a>Brochure</a>
          </li>
          <li>
            <Link to="/Speakers">Speakers</Link>
          </li>
          <li>
            <a>Register</a>
          </li>
          <li>
            <a>Submit Papers</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
          <li>
            <Link to="/Time">Events</Link>
          </li>
          <li>
            <Link to='/Partner'>Our Partners</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
