import React, { useState, useEffect } from 'react';
import './styles/Filter.css'; 

const Filter = ({ filters, onFilterChange, jobData }) => {
  const [locations, setLocations] = useState([]);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    if (jobData && jobData.length > 0) {
      const uniqueLocations = [...new Set(jobData.map(job => job.location))];
      const uniqueCompanies = [...new Set(jobData.map(job => job.company_name))];

      setLocations(uniqueLocations);
      setCompanies(uniqueCompanies);
    }
  }, [jobData]);

  return (
    <div className="filter-container">
      <select
        className="filter-select"
        value={filters.location}
        onChange={(e) => onFilterChange('location', e.target.value)}
      >
        <option value="">Select Location</option>
        {locations.map((location, index) => (
          <option key={index} value={location}>{location}</option>
        ))}
      </select>

      <select
        className="filter-select"
        value={filters.type}
        onChange={(e) => onFilterChange('type', e.target.value)}
      >
        <option value="">Select Job Type</option>
        <option value="Full-Time">Full-Time</option>
        <option value="Part-Time">Part-Time</option>
      </select>

      <select
        className="filter-select"
        value={filters.company}
        onChange={(e) => onFilterChange('company', e.target.value)}
      >
        <option value="">Select Company</option>
        {companies.map((company, index) => (
          <option key={index} value={company}>{company}</option>
        ))}
      </select>

      <button className="filter-button" onClick={() => onFilterChange('applyFilters')}>
        Apply Filters
      </button>
    </div>
  );
};

export default Filter;



