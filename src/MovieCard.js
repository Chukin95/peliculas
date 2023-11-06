import React from 'react';

function MovieCard({poster, title, releaseDate, duration, maturity, genres, director, mainActors, plot, metascore, rating}) {
  return (
    <div className="mx-auto max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={poster} alt={title} className="w-full h-80" />
      <div className="p-4">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p><b>Año de lanzamiento:</b> {releaseDate}</p>
        <p><b>Duración:</b> {duration} minutos</p>
        <p><b>Clasificación:</b> {maturity}</p>
        <p><b>Géneros:</b> {genres.join(', ')}</p>
        <p><b>Director:</b> {director}</p>
        <p><b>Actores Principales:</b> {mainActors.join(', ')}</p>
        <p><b>Trama:</b> {plot}</p>
        {(function(){
              if (metascore > 80) {
                return (<button className='bg-green-600 text-white font-bold py-1 px-4 rounded'><b>Metascore:</b> {metascore}</button>);
              } else if (metascore > 60) {
                return <button className='bg-yellow-400 text-white font-bold py-1 px-4 rounded'><b>Metascore:</b> {metascore}</button>;
              } else if (metascore > 40) {
                return <button className='bg-orange-600 text-white font-bold py-1 px-4 rounded'><b>Metascore:</b> {metascore}</button>;
              } else if (metascore > 20){
                return <button className='bg-red-600 text-white font-bold py-1 px-4 rounded'><b>Metascore:</b> {metascore}</button>;
              }
          }).call(this)
        }
        <p><b>Calificación:</b> {rating}</p>
      </div>
    </div>
  );
}

export default MovieCard;
