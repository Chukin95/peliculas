import axios from 'axios';
import React, { useEffect, useState } from "react";
import '../../styles/Search.css';
import SearchList from './SearchList';

function SearchForm() {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: '4292278a6986e2bb799d30006b16698d',
          language: 'es-ES',
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
          <div className="search-bar">
            <input
            id="default-search"
            value={searchValue}
            onChange={(event) => {setSearchValue(event.target.value)}}
            className="w-96"
            pattern=".*\S.*"
            required/>
            <button className="search-btn" type="submit">
            </button>
          </div>
        </div>
        <SearchList searchMovies={searchMovies}/>
    </div>
  );
}

export default SearchForm;
