import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <div className="movie__img--wrapper">
        <img src={movie.Poster} alt="" className="movie__img"/>
      </div>
      <div className="movie__title">
        {movie.Title} ({movie.Year})
      </div>
    </div>
  );
};  

export default Movie;
