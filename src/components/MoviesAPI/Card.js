import React from 'react';

const Card = ({ movie }) => {
  const posterBaseUrl = 'https://image.tmdb.org/t/p/';
  const posterSize = 'w300';

  return (
    <div className="card mx-auto max-w-md text-white bg-gray-400 shadow-lg rounded-lg overflow-hidden">
      <img src={`${posterBaseUrl}${posterSize}${movie.poster_path}`} alt={movie.title} className="w-full h-80" />
      {(function(){
              if (movie.vote_average > 7.9) {
                return (<button className='metascore bg-green-600 text-white font-bold py-1 px-4 rounded w-30'><b>Rating:</b> {movie.vote_average.toFixed(1)}/10⭐</button>);
              } else if (movie.vote_average > 5.9) {
                return <button className='metascore bg-yellow-400 text-white font-bold py-1 px-4 rounded w-30'><b>Rating:</b> {movie.vote_average.toFixed(1)}/10⭐</button>;
              } else if (movie.vote_average > 2.9) {
                return <button className='metascore bg-orange-600 text-white font-bold py-1 px-4 rounded w-30'><b>Rating:</b> {movie.vote_average.toFixed(1)}/10⭐</button>;
              } else {
                return <button className='metascore bg-red-600 text-white font-bold py-1 px-4 rounded w-30'><b>Rating:</b> {movie.vote_average.toFixed(1)}/10⭐</button>;
              }
          }).call(this)
        }
      <div className="p-4">
        <h2 className="mb-3 text-xl text-blue-600 font-semibold">{movie.title}</h2>
        <hr className='mb-2'/>
        <p className="text-white text-sm"><b>Estreno:</b> {movie.release_date}</p>
        <p className="text-white text-sm"><b>Sinapsis:</b> {movie.overview.slice(0, 200)+'...'}</p>
      </div>
    </div>
  );
};

export default Card;
