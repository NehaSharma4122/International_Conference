import { useState } from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [colour, setcolour] = useState(false);
  const changecolour = () => {
    if (window.scrollY >= 30) {
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
            <a><p>Brochure</p></a>
          </li>
          <li>
            <Link to="/Speakers"><p>Speakers</p></Link>
          </li>
          <li>
            <a><p>Register</p></a>
          </li>
          <li>
            <a><p>Submit Papers</p></a>
          </li>
          <li>
            <a><p>Contact Us</p></a>
          </li>
          <li>
            <Link to="/Time"><p>Events</p></Link>
          </li>
          <li>
            <Link to='/Partner'><p>Our Partners</p></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
