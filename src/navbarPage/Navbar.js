import React, { useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  useEffect(() => {
    const menuToggle = document.querySelector(".menu-toggle input");
    const navbarMenu = document.querySelector(".navbar-menu");

    function handleClick() {
      navbarMenu.classList.toggle("slide");
    }

    menuToggle.addEventListener("click", handleClick);

    return () => {
      menuToggle.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <p>Mhd Goncang</p>
      </div>
      <ul className="navbar-menu">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="menu-toggle">
        <input type="checkbox" id="checkbox" />
        <label for="checkbox" class="toggle">
          <div class="bars" id="bar1"></div>
          <div class="bars" id="bar2"></div>
          <div class="bars" id="bar3"></div>
        </label>
      </div>
    </div>
  );
}

export default Navbar;
