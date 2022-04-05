import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Movie = ({ movie }) => {

  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div className="movie">
        <div className="movie__img--wrapper">
          <img src={movie.Poster} alt="" className="movie__img" />
        </div>
        <div className="movie__title">
          {movie.Title} ({movie.Year})
        </div>
      </div>
    </Link>
  );
};

export default Movie;
