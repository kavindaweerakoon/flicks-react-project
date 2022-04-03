import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  return (
    <div>
      <nav>
        <div className="nav__container">
          <a href="/" className="nav__logo bg">
            <FontAwesomeIcon
              icon="fa-solid fa-masks-theater"
              className="logo"
            />
            flicks
          </a>

          <div className="nav__links">
            <a href="/" className="nav__link bg">
              Home
            </a>
            <a href=" " className="nav__link bg no-pointer">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
