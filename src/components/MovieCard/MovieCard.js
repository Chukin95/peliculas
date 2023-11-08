import React from 'react';

function MovieCard({poster, title, releaseDate, duration, maturity, genres, director, mainActors, plot, metascore, rating}) {
  return (
    <div className="card mx-auto max-w-md text-white bg-gray-400 shadow-lg rounded-lg overflow-hidden">
      <img src={poster} alt={title} className="w-full h-80" />
      {(function(){
              if (metascore > 80) {
                return (<button className='metascore bg-green-600 text-white font-bold py-1 px-4 rounded w-30'><b>Metascore:</b> {metascore}</button>);
              } else if (metascore > 60) {
                return <button className='metascore bg-yellow-400 text-white font-bold py-1 px-4 rounded w-30'><b>Metascore:</b> {metascore}</button>;
              } else if (metascore > 40) {
                return <button className='metascore bg-orange-600 text-white font-bold py-1 px-4 rounded w-30'><b>Metascore:</b> {metascore}</button>;
              } else {
                return <button className='metascore bg-red-600 text-white font-bold py-1 px-4 rounded w-30'><b>Metascore:</b> {metascore}</button>;
              }
          }).call(this)
        }
      <div className="p-4">
        <h2 className="mb-3 text-3xl text-blue-600 font-semibold">{title}</h2>
        <hr/>
        <p><b>Año de lanzamiento:</b> {releaseDate} | {duration}</p>
        <p><b>Duración:</b> 90 minutos</p>
        <p><b>Clasificación:</b> {maturity}</p>
        <p><b>Géneros:</b> {genres.join(', ')}</p>
        <p><b>Director:</b> {director}</p>
        <p><b>Actores Principales:</b> {mainActors.join(', ')}</p>
        <p><b>Trama:</b> {plot.slice(0,200)}</p>
        <p><b>Calificación:</b> {rating}/10⭐</p>
      </div>
    </div>
  );
}

export default MovieCard;
