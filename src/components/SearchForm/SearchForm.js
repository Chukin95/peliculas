import axios from 'axios';
import React, { useEffect, useState } from "react";
import SearchList from './SearchList';

function SearchForm() {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    // Realiza una solicitud a la API de TMDb aquí (similar al paso anterior)
    axios
      .get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: '4292278a6986e2bb799d30006b16698d',
          language: 'es-ES', // Cambia al idioma que prefieras
          query: `${searchValue}`,
          page: 1,
        },
      })
      .then((response) => {
        setSearchMovies(response.data.results);
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      });
  }, [searchValue]);

  return (
    <div>
        <div className="relative flex flex-column flex-wrap content-center justify-center items-center">
            <input type="search"
            id="default-search"
            value={searchValue}
            onChange={(event) => {setSearchValue(event.target.value)}}
            className="block w-96 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Buscar películas..."
            />
        </div>
        <SearchList searchMovies={searchMovies}/>
    </div>
  );
}

export default SearchForm;
