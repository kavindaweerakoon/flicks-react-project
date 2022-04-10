import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../components/Nav";

const MovieInfo = () => {
  const [loading, setLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState([]);

  const { id } = useParams();

  async function getMovieInfo() {
    setLoading(true);

    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=86147053&i=${id}&plot=short`
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
        <Link to="/movies" className="back__text">
          <FontAwesomeIcon
            icon="fa-solid fa-arrow-left"
            className="back__arrow"
          />
          &nbsp;Back
        </Link>
      </div>

      <div className="movie__info">
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
              IMBd Rating: <b>{movieInfo.imdbRating} </b>({movieInfo.imdbVotes}){" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
