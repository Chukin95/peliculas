import React, { useState } from "react";

function SearchForm() {

  const [searchValue, setSearchValue] = useState('');

  return (
    <div>
        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        value={searchValue}
        onChange={(event) => {setSearchValue(event.target.value)}}
        type="text"
        placeholder={searchValue}
        />
        <p>Estas buscando: {searchValue}</p>
    </div>
  );
}

export default SearchForm;
