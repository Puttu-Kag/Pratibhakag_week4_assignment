import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import JobList from './components/JobList';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import Pagination from './components/Pagination';
import Home from './components/Home';
import { fetchJobs } from './api';


function App() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ location: '', type: '', company: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;


  useEffect(() => {
    const loadJobs = async () => {
      const data = await fetchJobs();
      setJobs(data);
      setFilteredJobs(data);
    };
    loadJobs();
  }, []);



  const handleFiltering = useCallback(() => {
    let updatedJobs = [...jobs];

    if (searchTerm) {
      updatedJobs = updatedJobs.filter(job =>
        job.job_title && job.job_title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filters.location) {
      updatedJobs = updatedJobs.filter(job => job.location === filters.location);
    }

    if (filters.company) {
      updatedJobs = updatedJobs.filter(job => job.company_name === filters.company);
    }

    setFilteredJobs(updatedJobs);
  }, [jobs, searchTerm, filters]);


  useEffect(() => {
    handleFiltering();
  }, [handleFiltering]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  return (
    <div className="App">
      <Home />
      <SearchBar suggestions={jobs} onSearch={handleSearch} />
      <Filter onFilterChange={handleFilterChange} filters={filters} jobData={jobs} />
      <JobList jobs={currentJobs} />
      <Pagination
        totalJobs={filteredJobs.length}
        jobsPerPage={jobsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;