// API http://www.omdbapi.com/?apikey=86147053&
// https://omdbapi.com/

import React, { useState, useEffect } from "react";

import axios from "axios";
// import NoResults from "../assets/undraw_movie_night_re_9umk.svg";

import Nav from "../components/Nav";
import NavBackground from "../assets/movie-theater-4609877.jpg";
import MovieUI from "../ui/MovieUI";
import NoMovie from "../components/NoMovie";
import MovieSkeleton from "../components/MovieSkeleton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Movies = () => {
  const [loading, setLoading] = useState();
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState();
  const [noMovie, setNoMovie] = useState(Boolean);

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(search);
  };

  function showSort() {
    document.body.classList += " sort";
  }

  function hideSort() {
    document.body.classList.remove("sort");
  }

  const term = localStorage.getItem("search");

  async function getMovies(movieTitle) {
    setLoading(true);

    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=86147053&s=${
        term || movieTitle
      }&type=movie`
    );
    // if you to get the array from the object that you called look for the name of the array that you called then append it to the variable where the data from the API call is stored at

    if (data.Search) {
      setMovies(data.Search);
      setNoMovie(false);
    } else {
      setMovies([]);
      setNoMovie(true);
    }
    setTimeout(() => {
      setLoading(false);
    }, 250);
  }

  useEffect(() => {
    getMovies(term);
  }, []);

  function filterMovies(filter) {
    if (filter === "YEAR_LOW_TO_HIGH") {
      setMovies(movies.slice(0, 6).sort((a, b) => a.Year - b.Year));
    }
    if (filter === "YEAR_HIGH_TO_LOW") {
      setMovies(movies.slice(0, 6).sort((a, b) => b.Year - a.Year));
    }
    if (filter === "TITLE_A_TO_Z") {
      setMovies(
        movies.slice(0, 6).sort((a, b) => a.Title.localeCompare(b.Title))
      );
    }
    if (filter === "TITLE_Z_TO_A") {
      setMovies(
        movies.slice(0, 6).sort((a, b) => b.Title.localeCompare(a.Title))
      );
    }
  }

  return (
    <>
      <section id="display">
        <Nav />
        <img src={NavBackground} className="nav__background" alt="" />
        <form className="search--movies">
          <input
            className="search__input--movies"
            type="text"
            id="text"
            placeholder={"Search using any keyword"}
            required="required"
            onChange={(e) => {
              setSearch(e.target.value);
              localStorage.setItem("search", e.target.value);
            }}
            enterKeyHint="search"
            onSubmit={search ? handleSubmit : null}
            value={term}
          />
          <button
            className="search__button--movies"
            type="submit"
            onClick={search ? handleSubmit : null}
          >
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </button>
        </form>
      </section>

      <section id="movies">
        <select
          id="sort"
          defaultValue=""
          onChange={(e) => filterMovies(e.target.value)}
        >
          <option value="YEAR_HIGH_TO_LOW" selected>
            Year - High to Low
          </option>
          <option value="YEAR_LOW_TO_HIGH">Year - Low to High</option>
          <option value="TITLE_A_TO_Z">Title - A to Z</option>
          <option value="TITLE_Z_TO_A">Title - Z to A</option>
        </select>

        <div className="movies__container">
          {/* 
        // If the movies array is empty then display the NoMovie component. If movies are loading then display the skeleton component. If movies are not loading then display the Movie component.
        {loading ? (skeleton code) : (movies code) ? }
         */}
          {loading ? (
            (hideSort(),
            new Array(6).fill(0).map((_, index) => <MovieSkeleton />))
          ) : noMovie ? (
            <NoMovie />
          ) : (
            (showSort(),
            movies
              .slice(0, 6)
              .map((movie) => <MovieUI movie={movie} key={movie.id} />))
          )}
        </div>
      </section>
    </>
  );
};

export default Movies;
