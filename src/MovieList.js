import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <div className="mb-10 mx-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map((movie, index) => (
        <MovieCard key={index} {...movie} />
      ))}
    </div>
  );
}

export default MovieList;
