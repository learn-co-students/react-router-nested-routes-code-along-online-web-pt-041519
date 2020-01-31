import React from 'react';
import { NavLink } from 'react-router-dom';
 
const subLink = {
  width: 'auto',
  padding: '5px 5px 5px 0',
  margin: '5px 5px 5px 0'
}

const MoviesList = ({ movies }) => {
  const renderMovies = Object.keys(movies).map(movieID =>
    <NavLink key={movieID} to={`/movies/${movieID}`} style={subLink}>{movies[movieID].title}</NavLink>
  );
 
  return (
    <div>
      {renderMovies}
    </div>
  );
};
 
export default MoviesList;