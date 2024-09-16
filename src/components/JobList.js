import React, { useState } from 'react';
import ApplyForm from './ApplyForm';
import './styles/JobList.css'; 

const JobList = ({ jobs }) => {
  const [selectedJob, setSelectedJob] = useState(null); 
  const [showApplyForm, setShowApplyForm] = useState(false); 

  const handleApplyClick = (job) => {
    setSelectedJob(job); 
    setShowApplyForm(true); 
  };

  const handleCloseForm = () => {
    setShowApplyForm(false); 
  };

  return (
    <div className="job-list-container"> 
      <h1>Job Listings</h1>
      <div className="centered-container">
        {jobs.map((job) => (
          <div key={job.id} className="job-card"> 
            <h2><strong>Title:</strong>{job.job_title}</h2>
            <p><strong>Company:</strong> {job.company_name}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Description:</strong> {job.description}</p>
            <button onClick={() => handleApplyClick(job)}>Apply</button>
          </div>
        ))}
      </div>
      {showApplyForm && (
        <ApplyForm job={selectedJob} onClose={handleCloseForm} />
      )}
    </div>
  );
};

export default JobList;
