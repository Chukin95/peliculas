import './App.css';
import peliculas from './MOVIES_DATA.json';
import MovieList from './MovieList';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-semibold mb-4 text-center">Lista de Películas</h1>
      <MovieList movies={peliculas} />
    </div>
  );
}

export default App;
