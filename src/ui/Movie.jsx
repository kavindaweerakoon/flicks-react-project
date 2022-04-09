import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {

  return (
      <div className="movie">
    <Link to={`/movies/${movie.imdbID}`}>
        <div className="movie__img--wrapper">
          <img src={movie.Poster} alt="" className="movie__img" />
        </div>
        <div className="movie__title">
          {movie.Title} ({movie.Year})
        </div>
    </Link>
      </div>
  );
};

export default Movie;
