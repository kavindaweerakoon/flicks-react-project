import React from 'react';
import NoMovieImage from '../assets/undraw_lost_re_xqjt.svg';

const NoMovie = () => {
    return (
        <div className='no-movie'> 
            <img src={NoMovieImage} alt="No Movie"/>
            <h1>No Movie Found!</h1>
        </div>
    );
}

export default NoMovie;
