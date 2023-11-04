import React from 'react';

function MovieCard({poster, title, releaseDate, duration, maturity, genres, director, mainActors, plot, metascore, rating}) {
  return (
    <div className="mx-auto max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={poster} alt={title} className="w-full h-80" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p>Año de lanzamiento: {releaseDate}</p>
        <p>Duración: {duration} minutos</p>
        <p>Clasificación: {maturity}</p>
        <p>Géneros: {genres.join(', ')}</p>
        <p>Director: {director}</p>
        <p>Actores Principales: {mainActors.join(', ')}</p>
        <p>Trama: {plot}</p>
        <p>Metascore: {metascore}</p>
        <p>Calificación: {rating}</p>
      </div>
    </div>
  );
}

export default MovieCard;
