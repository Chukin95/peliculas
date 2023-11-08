import MoviesListFromAPI from '../Movie';
import LoginForm from '../components/LoginForm/LoginForm';
import MoviesListFromJSON from '../components/MovieList/MovieList';
import SearchFromAPI from '../components/SearchForm/SearchForm';
import peliculas from '../json/MOVIES_DATA.json';
import '../styles/App.css';
import '../styles/MovieCard.css';

function App() {
  return (
    <div className="App">
      <div className='flex flex-col flex-wrap content-center'>
        <h1 className="my-10 text-3xl font-semibold text-center">Iniciar sesión</h1>
        <LoginForm/>
      </div>
      <div className="flex flex-col flex-wrap content-center">
        <h1 className="my-10 text-3xl font-semibold text-center">Busqueda en API</h1>
        <SearchFromAPI className="w-96 max-w-xs"/>
      </div>
      <div>
        <h1 className="my-10 text-3xl font-semibold text-center">TOP Peliculas - API</h1>
        <MoviesListFromAPI/>
      </div>
      <div className='movies-container'>
        <h1 className="my-10 text-3xl font-semibold text-center">Lista de Películas - JSON</h1>
        <MoviesListFromJSON movies={peliculas} />
      </div>
    </div>
  );
}

export default App;
