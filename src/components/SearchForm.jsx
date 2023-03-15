import './SearchForm.css'

function SearchForm({initialQuery, handleSearch}) {
	return (
		<form onSubmit={handleSearch} className="searchForm">
            <label htmlFor="search-input" className='searchLabel'>SEARCH</label>
			<input type="text" id="search-input" className='searchInput' name="search-input" defaultValue={initialQuery} required></input>
            <input type="submit" value="SUBMIT" className='submitButton'></input>
		</form>
	);
}

export default SearchForm;
