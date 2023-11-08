// Movie.js
import React from 'react';
import SearchCard from './SearchCard';

const Movie = ({searchMovies}) => {
  return (
    <div>
      <div className="my-10 mx-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {searchMovies.map((movie) => (
            <SearchCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default Movie;
