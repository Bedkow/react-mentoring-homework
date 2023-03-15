import './App.css';
import Counter from './components/Counter';
import SearchForm from './components/SearchForm';
import GenreSelect from './components/GenreSelect';

function App() {
  return (
    <div className="App">
      <Counter initialValue={0}/>
      <SearchForm />
      <GenreSelect />
    </div>
  );
}

export default App;
