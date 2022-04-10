import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieInfoUI = ({movieInfo}) => {
    return (
        <>
            <div className="movie__info--left">
              <div className="movie__img--wrapper ">
                <img src={movieInfo.Poster} alt="" className="movie__img" />
              </div>
              <div className="movie__title">
                <h3>{movieInfo.Title}</h3>
              </div>
              <div className="movie__releaseDate">
                Released: <b>{movieInfo.Released}</b>
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
                <FontAwesomeIcon icon="fa-solid fa-star gold" />
                <p>
                  IMBd Rating: <b>{movieInfo.imdbRating} </b>(
                  {movieInfo.imdbVotes}){" "}
                </p>
              </div>
            </div>
          </>
    );
}

export default MovieInfoUI;
