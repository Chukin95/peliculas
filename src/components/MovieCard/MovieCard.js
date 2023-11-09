import React from 'react';

function getMetascoreButton(metascore) {
  let buttonClass;

  if (metascore > 79) {
    buttonClass = 'bg-green-600';
  } else if (metascore > 59) {
    buttonClass = 'bg-yellow-400';
  } else if (metascore > 39) {
    buttonClass = 'bg-orange-600';
  } else {
    buttonClass = 'bg-red-600';
  }

  return (
    <button className={`metascore text-white font-bold py-1 px-4 rounded w-30 ${buttonClass}`}><b>Metascore:</b> {metascore}</button>
  );
}

function MovieCard({poster, title, releaseDate, duration, maturity, genres, director, mainActors, plot, metascore, rating}) {
  return (
    <div className="card mx-auto max-w-md text-white bg-gray-400 shadow-lg rounded-lg overflow-hidden">
      <div>
        <img src={poster} alt={title} className="w-full h-80" />
        {getMetascoreButton(metascore)}
      </div>
      <div className="p-2">
        <h2 className="mb-3 pt-0 text-xl text-blue-500 font-semibold">{title}</h2>
        <hr/>
        <p className='text-green-700 mt-4'><b>Año:</b> {releaseDate.slice(-4)} | {duration} | {maturity}</p>
        <p><b>Duración:</b> 90 minutos</p>
        <p><b>Géneros:</b> {genres.join(', ')}</p>
        <p><b>Director:</b> {director}</p>
        <p><b>Actores:</b> {mainActors.join(', ')}</p>
        <p><b>Trama:</b> {plot.slice(0,200)}</p>
        <p><b>Calificación:</b> {rating}/10⭐</p>
      </div>
    </div>
  );
}

export default MovieCard;
