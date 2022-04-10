import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import MovieInfoSkeleton from "../components/MovieInfoSkeleton";

import Nav from "../components/Nav";
import MovieInfoUI from "../ui/MovieInfoUI";

const MovieInfo = () => {
  const [loading, setLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState([]);

  const { id } = useParams();

  async function getMovieInfo() {
    setLoading(true);

    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=86147053&i=${id}&plot=short`
    );

    setMovieInfo(data);
    console.log(data);

    setTimeout(() => {
      setLoading(false);
    }, 250);
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
        {loading ? (
          <MovieInfoSkeleton />
        ) : (
          <MovieInfoUI movieInfo={movieInfo} />
        )}
      </div>
    </div>
  );
};

export default MovieInfo;
