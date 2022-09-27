import React, { useState, useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [wid, setWid] = useState("-100%");
  const [navbar, setNavbar] = useState("");

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar("rgba(0, 0, 0, 0.9)");
    } else {
      setNavbar("");
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  const openSidebar = () => {
    setWid("0");
  };
  const closeSidebar = () => {
    setWid("-100%");
  };

  return (
    <nav
      className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3 justify-content-center"
      style={{ backgroundColor: `${navbar}` }}
    >
      <div className="menu-bars">
        <div>
          <Link to="#">
            <FaBars onClick={openSidebar} />
          </Link>
        </div>
      </div>
      <Sidebar left={wid} closeSidebar={closeSidebar} />

      <ul className="nav nav-pills justify-content-center">
        <li className="nav-item">
          <NavHashLink to="#home-section" className="nav-link active">
            Home
          </NavHashLink>
        </li>
        <li className="nav-item">
          <NavHashLink to="#about-section" className="nav-link">
            About ME
          </NavHashLink>
        </li>
        <li className="nav-item">
          <NavHashLink to="#skills-section" className="nav-link">
            Portfolio
          </NavHashLink>
        </li>
        <li className="nav-item">
          <NavHashLink to="#skills-section" className="nav-link">
            Skills
          </NavHashLink>
        </li>
        <li className="nav-item">
          <NavHashLink to="#contact-section" className="nav-link">
            Contact
          </NavHashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
