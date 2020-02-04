import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const renderMovies = Object.keys(movies).map(movieID =>
    
    <li className="single-movie" id={movies[movieID].title} key={movieID}>
        <Link 
            key={movieID} 
            to={`/movies/${movieID}`}>
                {movies[movieID].title}
        </Link>
    </li>

  );

  return (

    <ul className="movie-list" >
        {renderMovies}
    </ul>   
    
  );
};

export default MoviesList;