import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  if (clicked === true) {
    document.body.style.overflow = "hidden"; //For disable scrolling
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <nav className="navbar">
      <div className="container nav__container">
        <Link to="/" className="nav__logo" onClick={() => setClicked(false)}>
          <img src="./images/logo.png" alt="Logo" className="img-fluid" />
        </Link>
        <div className="menu__icon" onClick={() => setClicked(!clicked)}>
          <i className={clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
        <ul className={clicked ? "nav__menu nav__mobile" : "nav__menu"}>
          <li className="nav__item">
            <NavLink
              to="/"
              className="nav__link"
              onClick={() => setClicked(false)}
            >
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/about"
              className="nav__link"
              onClick={() => setClicked(false)}
            >
              About
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/expertise"
              className="nav__link"
              onClick={() => setClicked(false)}
            >
              Expertise
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/teams"
              className="nav__link"
              onClick={() => setClicked(false)}
            >
              Teams
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/works"
              className="nav__link"
              onClick={() => setClicked(false)}
            >
              Works
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/contact"
              className="nav__link"
              onClick={() => setClicked(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
