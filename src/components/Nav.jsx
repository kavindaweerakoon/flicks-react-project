import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  
  
  return (
    <div>
      <nav>
        <div className="nav__container">
          <Link to="/" className="nav__logo bg">
            <FontAwesomeIcon
              icon="fa-solid fa-masks-theater"
              className="logo"
            />
            flicks
          </Link>

          <div className="nav__links">
            <Link to="/" className="nav__link bg">
              Home
            </Link>
            <Link to=" " className="nav__link bg no-pointer">
              Contact
            </Link>
           

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
