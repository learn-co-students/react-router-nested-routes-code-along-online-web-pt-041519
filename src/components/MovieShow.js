import React from 'react'

const MovieShow = ({ match, movies }) => {
    return(
        <div className="movie-show">
            {console.log(match)}
            <h3>{movies[match.params.movieId].title}</h3>
        </div>
    )
}
export default MovieShow