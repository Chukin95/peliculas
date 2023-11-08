// Movie.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Movie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Realiza una solicitud a la API de TMDb aquí (similar al paso anterior)
    axios
      .get('https://api.themoviedb.org/3/discover/movie', {
        params: {
          api_key: '4292278a6986e2bb799d30006b16698d',
          language: 'es-ES', // Cambia al idioma que prefieras
          sort_by: 'popularity.desc',
          page: 1,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  return (
    <div>
      <div className="my-10 mx-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movie;
