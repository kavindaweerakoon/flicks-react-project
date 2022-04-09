import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../components/Nav";

const MovieInfo = ({ movie }) => {
  const [loading, setLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState([]);

  const { id } = useParams();
  console.log(id);

  async function getMovieInfo(movieID) {
    setLoading(true);

    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=86147053&i=${id}&plot=full`
    );

    setMovieInfo(data);

    console.log(data);

    setLoading(false);
  }

  useEffect(() => {
    getMovieInfo();
  }, []);

  return (
    <div>
      <Nav />

      <div className="back">
        <Link to="/movies">
          <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
          &nbsp;Back
        </Link>
      </div>

      <div className="movie__info">
        <div className="movie__info--left">
          <div className="movie__img--wrapper ">
            <img src={movieInfo.Poster} alt="" className="movie__img" />
          </div>
          <div className="movie__title">
            {movieInfo.Title} ({movieInfo.Year})
          </div>
        </div>
        <div className="movie__info--right">
          <div className="movie__plot">
            <p>{movieInfo.Plot}</p>
          </div>
          <div className="movie__director">
            <p>Director: {movieInfo.Director}</p>
          </div>
          <div className="movie__actors">
            <p>Actors: {movieInfo.Actors}</p>
          </div>
          <div className="movie__genre">
            <p>Genre: {movieInfo.Genre}</p>
          </div>
          <div className="movie__runtime">
            <p>Runtime: {movieInfo.Runtime}</p>
          </div>
          <div className="movie__rating">
            <p>Rating: {movieInfo.imdbRating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
