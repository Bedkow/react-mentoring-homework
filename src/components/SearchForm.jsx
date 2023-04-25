import React, { useState, useRef, useEffect } from 'react';

const SearchForm = ({ initialQuery, onSubmitQuery }) => {
  const [query, setQuery] = useState(initialQuery);
  const inputRef = useRef(null);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSubmitQuery(inputRef);
  };

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchForm;
