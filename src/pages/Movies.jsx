// API http://www.omdbapi.com/?apikey=86147053&
// https://omdbapi.com/

import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
// import NoResults from "../assets/undraw_movie_night_re_9umk.svg";

import Nav from "../components/Nav";
import NavBackground from "../assets/504616.jpg";
import Movie from "../ui/Movie";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState();
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState(id);

  function onSearch() {
    getMovies(search);
  }

  async function getMovies(movieTitle) {
    setLoading(true);
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=86147053&s=${movieTitle}&type=movie`
    );
    // if you to get the array from the object that you called look for the name of the array that you called then append it to the variable where the data from the API call is stored at
    setMovies(data.Search);
    setLoading(false);
    console.log(movies);
  }

  useEffect(() => {
    getMovies();
  }, []);

  function filterMovies(filter) {
    if (filter === "YEAR_LOW_TO_HIGH") {
      setMovies(movies.slice(0, 6).sort((a, b) => a.Year - b.Year));
    }
    if (filter === "YEAR_HIGH_TO_LOW") {
      setMovies(movies.slice(0, 6).sort((a, b) => b.Year - a.Year));
    }
    if (filter === "TITLE_A_TO_Z") {
      setMovies(movies.slice(0, 6).sort((a, b) => a.Title.localeCompare(b.Title)));
    }
    if (filter === "TITLE_Z_TO_A") {
      setMovies(movies.slice(0, 6).sort((a, b) => b.Title.localeCompare(a.Title)));
    }
  }

  return (
    <>
      <section id="display">
        <Nav />
        <img src={NavBackground} className="nav__background" alt="" />
        <form class="search--movies" action="./movies.html">
          <input type="text" id="text" placeholder="Search using any keyword" />
          <button>
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
          <option value="" disabled selected>
            Sort
          </option>
          <option value="YEAR_LOW_TO_HIGH">Year - Low to High</option>
          <option value="YEAR_HIGH_TO_LOW">Year - High to Low</option>
          <option value="TITLE_A_TO_Z">Title - A to Z</option>
          <option value="TITLE_Z_TO_A">Title - Z to A</option>
        </select>
        <div className="movies__container">
          {loading
            ? "loading"
            : movies
                .slice(0, 6)
                .map((movie) => <Movie movie={movie} key={movie.id} />)}
        </div>
      </section>
    </>
  );
};

export default Movies;
