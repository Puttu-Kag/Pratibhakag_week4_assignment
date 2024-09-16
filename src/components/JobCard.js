import React, { useState } from 'react';
import ApplyForm from './ApplyForm';
import "./styles/JobCard.css";

const JobCard = ({ job }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="job-card-container"> 
    <div className="job-card">
      <h3>{job.job_title}</h3>
      <p>{job.company_name} - {job.location}</p>
        <p>{job.description}</p>
      <button onClick={() => setShowForm(true)}>Apply</button>
      {showForm && <ApplyForm job={job} onClose={() => setShowForm(false)} />}
    </div>
    </div>
    
  );
};

export default JobCard;