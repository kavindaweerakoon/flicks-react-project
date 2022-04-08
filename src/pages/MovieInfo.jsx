import { Axios } from "axios";
import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";




const MovieInfo = ({movie}) => {
  
  const [loading, setLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState([]);

  async function getMovieInfo(movieID) {
    setLoading(true);

    const { data } = await Axios.get(
      `http://www.omdbapi.com/?apikey=86147053&i=tt0322259&plot=full`
    );

    if (data.Search) {
      setMovieInfo(data);
      
    } else {
      setMovieInfo([]);
     
    }

    setLoading(false);
  }

  useEffect(() => {
    getMovieInfo();
  }, []);

  return (
    <div>
      <Nav/>
      <div className="movie">
        <div className="movie__img--wrapper">
          <img src={movieInfo.Poster} alt="" className="movie__img" />
        </div>
        <div className="movie__title">
          {movieInfo.Title} ({movieInfo.Year})
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
