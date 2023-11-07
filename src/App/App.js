import LoginForm from '../components/LoginForm/LoginForm';
import MovieList from '../components/MovieList/MovieList';
import SearchForm from '../components/SearchForm/SearchForm';
import peliculas from '../json/MOVIES_DATA.json';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <div className='flex flex-col flex-wrap content-center'>
        <h1 className="my-10 text-3xl font-semibold text-center">Iniciar sesión</h1>
        <LoginForm/>
      </div>
      <div className="flex flex-col flex-wrap content-center">
        <h1 className="my-10 text-3xl font-semibold text-center">Busqueda</h1>
        <SearchForm className="w-96 max-w-xs"/>
      </div>
      <div className='movies-container'>
        <h1 className="my-10 text-3xl font-semibold text-center">Lista de Películas</h1>
        <MovieList movies={peliculas} />
      </div>
    </div>
  );
}

export default App;
