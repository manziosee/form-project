import React, { useState } from 'react';
import './PersonalInformation.css';

function PersonalInformation() {
  const [details, setDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });

  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="form-section">
      <h2 onClick={toggleCollapse} className="section-header">
        Personal Information
        <span className="toggle-button">▼</span>
      </h2>
      {!isCollapsed && (
        <div className="form-content">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" value={details.firstName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" value={details.lastName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={details.email} onChange={handleChange} required />
            <small>example@example.com</small>
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" value={details.phoneNumber} onChange={handleChange} required />
            <small>Please enter a valid phone number.</small>
          </div>
        </div>
      )}
    </div>
  );
}

export default PersonalInformation;