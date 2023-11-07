import './App.css';
import Formulario from './Formulario';
import peliculas from './MOVIES_DATA.json';
import MovieList from './MovieList';

function App() {
  return (
    <div className="App">
      <div className='flex flex-col flex-wrap content-center'>
        <h1 className="my-10 text-3xl font-semibold text-center">Log in</h1>
        <Formulario/>
      </div>
      <div className='movies-container'>
        <h1 className="my-10 text-3xl font-semibold text-center">Lista de Películas</h1>
        <MovieList movies={peliculas} />
      </div>
    </div>
  );
}

export default App;
