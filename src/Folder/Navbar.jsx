import React from "react";
import { Link, NavLink } from "react-router-dom";


export default function Navbar() {
 
  
  window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    var scrolled = document.documentElement.scrollTop;

    if (scrolled > 0) {
      navbar.classList.remove("scrolled");
    } else {
      navbar.classList.add("scrolled");
    }
  });

  return (
    <>
      <nav className="navbar navbar-expand-lg  fixed-top">
        <div className="container">
          <Link className="navbar-brand fs-2 fw-bold text-white" to="">
            START FRAMEWORK
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to=""
                ></Link>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive})=>isActive? "nav-link test": "nav-link"} to="About"> About </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive})=>isActive? "nav-link test": "nav-link"} to="Portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive})=>isActive? "nav-link test": "nav-link"} to="Contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
