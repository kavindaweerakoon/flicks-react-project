import React from "react";

const MovieInfoSkeleton = () => {
  return (
    <div>
      <div className="movie__info--left">
        <div className="movie__img--skeleton"> </div>

        <div className="movie__title">
          <div className="movie__title--skeleton"></div>
        </div>
        <div className="movie__releaseDate">
          <div className="movie__releaseDate--skeleton"></div>
        </div>
      </div>
      <div className="movie__info--right">
        <div className="movie__plot">
          <div className="movie__plot--skeleton"></div>
        </div>
        <div className="movie__director">
          <div className="movie__director--skeleton"></div>
        </div>
        <div className="movie__actors">
          <div className="movie__actors--skeleton"></div>
        </div>
        <div className="movie__genre">
          <div className="movie__genre--skeleton"></div>
        </div>
        <div className="movie__runtime">
          <div className="movie__runtime--skeleton"></div>
        </div>
    
          <div className="movie__rating--skeleton"></div>
        
      </div>
    </div>
  );
};

export default MovieInfoSkeleton;
