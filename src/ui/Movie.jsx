import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
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
