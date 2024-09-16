import React, { useState } from 'react';
import './styles/ApplyForm.css';

const ApplyForm = ({ job, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application Submitted');
    onClose();
  };

  return (
    <div className="apply-form-container">
      <form className="apply-form" onSubmit={handleSubmit}>
        <h2>Apply for this {job.job_title}</h2>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
        />
        <button type="submit">Submit Application</button>
        <button type="button" onClick={onClose} className="cancel-button">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;