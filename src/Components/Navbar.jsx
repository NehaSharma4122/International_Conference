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
            <a href="javascript:void(0)" class="dropbtn">
              Brochure
            </a>
            <div class="dropdown-content">
              <a>Link 1</a>
              <a>Link 2</a>
              <a>Link 3</a>
            </div>
          </li>
          <li>
            <Link to="/Speakers">Speakers</Link>
          </li>
          <li>
            <a href="javascript:void(0)" class="dropbtn">
              Register
            </a>
            <div class="dropdown-content">
              <a>Link 1</a>
              <a>Link 2</a>
              <a>Link 3</a>
            </div>
          </li>
          <li>
            <a href="javascript:void(0)" class="dropbtn">
              Events
            </a>
            <div class="dropdown-content">
              <a>Link 1</a>
              <a>Link 2</a>
              <a>Link 3</a>
            </div>
          </li>
          <li>
            <a href="javascript:void(0)" class="dropbtn">
              Submit Papers
            </a>
            <div class="dropdown-content">
              <a>Link 1</a>
              <a>Link 2</a>
              <a>Link 3</a>
            </div>
          </li>
          <li>
            <a href="javascript:void(0)" class="dropbtn">
              Contact Us
            </a>
            <div class="dropdown-content">
              <a>Link 1</a>
              <a>Link 2</a>
              <a>Link 3</a>
            </div>
          </li>
          <li>
            <Link to="/Timeline">Timeline</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
