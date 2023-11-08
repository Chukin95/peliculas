// Movie.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  function handleNextPage() {
    setPage(page+1);
    console.log("Pagina número: " + (page+1));
  }

  function handlePrevPage() {
    if (page > 1) {
      setPage(page-1);
    } else {
      setPage(1);
    }
    console.log("Pagina número: " + (page>1 ? page-1 : 1));
  }

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/discover/movie', {
        params: {
          api_key: '4292278a6986e2bb799d30006b16698d',
          language: 'es-ES',
          sort_by: 'popularity.desc',
          page: page,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      });
  }, [page]);

  return (
    <div>
      <div className="inline-flex">
        <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        onClick={handlePrevPage}>
          Prev
        </button>
        <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        onClick={handleNextPage}
        >
          Next
        </button>
      </div>
      <div className="my-10 mx-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movie;
