import './App.css';
import Counter from './components/Counter';
import SearchForm from './components/SearchForm';
import GenreSelect from './components/GenreSelect';
import genreData from "./data/genres.json"

function App() {

 const handleSearch = (e) => {
    e.preventDefault();
    let searchValue = document.querySelector('#search-input').value;
    console.log(searchValue);
  }

  let selectedGenreList = [];

  const handleSelectGenre = (e) => {
    if (e.target.checked) {
      console.log(`checked ${e.target.name}`);
      e.target.parentElement.classList.add("active");
      selectedGenreList.push(e.target.name);
    } else {
      console.log(`unchecked ${e.target.name}`);
      e.target.parentElement.classList.remove("active");
      selectedGenreList = selectedGenreList.filter((genre) => genre !== e.target.name);
    }
  }

  return (
    <div className="App">
      <Counter initialValue={0}/>
      <hr></hr>
      <SearchForm initialQuery={"Movie Title"} handleSearch={handleSearch}/>
      <hr></hr>
      <GenreSelect genreData={genreData} selectedGenreList={selectedGenreList} handleSelectGenre={handleSelectGenre}/>
    </div>
  );
}

export default App;
