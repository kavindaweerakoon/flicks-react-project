import React from "react";
import HomeImage from "../assets/undraw_movie_night_re_9umk.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "../components/Nav";


const Landing = () => {
  return (
    <>
      <Nav />
      <section id="landing">
        <header class="about row">
          <h1 class="about__title orange">
            Canada's most used movie database platform
          </h1>

          <h2 class="about__subtitle orange">Find your picks with flicks</h2>

          <form class="search" action="/movies">
            <input
              type="text"
              id="text"
              placeholder="Search using any keyword"
              required="required"
            />
            <button>
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </button>
          </form>

          <div class="image">
            <img src={HomeImage} alt="" class="image--wrapper" />
          </div>
        </header>
      </section>
    </>
  );
};

export default Landing;
