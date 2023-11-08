import React, { useState, useEffect } from "react";
import axios from 'axios';
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
        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        name="search"
        value={searchValue}
        onChange={(event) => {setSearchValue(event.target.value)}}
        type="text"
        placeholder={searchValue}
        />
        <p>Estas buscando: {searchValue}</p>
        <SearchList searchMovies={searchMovies}/>
    </div>
  );
}

export default SearchForm;
