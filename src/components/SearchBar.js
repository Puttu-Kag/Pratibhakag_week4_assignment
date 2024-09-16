import React, { useState } from 'react';
import './styles/SearchBar.css'; 

const SearchBar = ({ onSearch, suggestions = [] }) => {
  const [term, setTerm] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleSearchInput = (e) => {
    const searchTerm = e.target.value;
    setTerm(searchTerm);
    setDropdownVisible(searchTerm.length > 0);
    onSearch(searchTerm);
  };

  const handleSelectSuggestion = (jobTitle) => {
    setTerm(jobTitle);
    setDropdownVisible(false);
    onSearch(jobTitle);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={term}
        onChange={handleSearchInput}
        className="search-input"
        placeholder="Search for jobs..."
      />
      <button className="search-button" onClick={() => onSearch(term)}>Search</button>
      {dropdownVisible && suggestions.length > 0 && (
        <ul className="dropdown">
          {suggestions.map((job, index) => (
            <li 
              key={index} 
              onClick={() => handleSelectSuggestion(job.job_title)} 
              className="dropdown-item"
            >
              {job.job_title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
