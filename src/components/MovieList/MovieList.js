import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

function MovieList({ movies }) {
  return (
    <div className="mb-10 mx-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.title+movie.duration} poster={movie.poster} title={movie.title} releaseDate={movie.releaseDate} duration={movie.duration} maturity={movie.maturity} genres={movie.genres} director={movie.director} mainActors={movie.mainActors} plot={movie.plot} metascore={movie.metascore} rating={movie.rating} />
      ))}
    </div>
  );
}

export default MovieList;
