import { useState } from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [colour, setcolour] = useState(false);
  const changecolour = () => {
    if (window.scrollY >= 350) {
      setcolour(true);
    } else {
      setcolour(false);
    }
  };
  window.addEventListener("scroll", changecolour);
  return (
    <div className={colour ? "navbar new" : "navbar"}>
      <Link to="/" className="logo">
        <h1>Inter-Con</h1>
      </Link>
      <div className="buttons">
        <ul>
          <li>
            <a>Brochure</a>
          </li>
          <li>
            <a>Speakers</a>
          </li>
          <li>
            <a>Register</a>
          </li>
          <li>
            <a>Events</a>
          </li>
          <li>
            <a>Submit Papers</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
