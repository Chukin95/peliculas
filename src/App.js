import './App.css';
import peliculas from './MOVIES_DATA.json';
import MovieList from './MovieList';

function App() {
  return (
    <div className="App">
        <h1 className="my-10 text-3xl font-semibold text-center">Lista de Películas</h1>
        <MovieList movies={peliculas} />
    </div>
  );
}

export default App;
