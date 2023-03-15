import './App.css';
import Counter from './components/Counter';
import SearchForm from './components/SearchForm';
import GenreSelect from './components/GenreSelect';

function App() {

 const handleSearch = (e) => {
    e.preventDefault();
    let searchValue = document.querySelector('#search-input').value;
    console.log(searchValue);
  }

  return (
    <div className="App">
      <Counter initialValue={0}/>
      <hr></hr>
      <SearchForm initialQuery={"Movie Title"} handleSearch={handleSearch}/>
      <hr></hr>
      <GenreSelect />
    </div>
  );
}

export default App;
