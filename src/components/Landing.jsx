import React, { useState } from "react";
import HomeImage from "../assets/undraw_movie_night_re_9umk.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";
localStorage.setItem("search", "")

const Landing = () => {
  const [search, setSearch] = useState("");


  const handleChange = (e) => {
    setSearch(e.target.value);
    localStorage.setItem("search", e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/movies`);
  };

  const navigate = useNavigate();
// use localstorage to store the search value
  return (
    <>
      <Nav />
      <section id="landing">
        <header className="about row">
          <h1 className="about__title orange">
            Canada's most used movie database platform
          </h1>

          <h2 className="about__subtitle orange">
            Find your picks with flicks
          </h2>

          <form className="search">
            <input
              className="search__input"
              type="text"
              id="text"
              placeholder="Search using any keyword"
              required="required"
              onChange={handleChange}
              onSubmitEditing={search ? handleSubmit : null}
              onSubmit={search ? handleSubmit : null}
            />
            <button className="search__button" type="submit" onClick={search ? handleSubmit : null}  > 
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </button>
          </form>

          <div className="image">
            <img src={HomeImage} alt="" className="image--wrapper" />
          </div>
        </header>
      </section>
    </>
  );
};

export default Landing;
