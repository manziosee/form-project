import React, { useState } from 'react';
import './BookingDetails.css';

function BookingDetails() {
  const [details, setDetails] = useState({
    date: '',
    time: ''
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
        Booking Details Section
        <button className={`toggle-button ${isCollapsed ? '' : 'rotate'}`}>▼</button>
      </h2>
      {!isCollapsed && (
        <div className="form-content">
          <div className="form-group">
            <label htmlFor="date">Booking Date</label>
            <input type="date" id="date" name="date" value={details.date} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input type="time" id="time" name="time" value={details.time} onChange={handleChange} required />
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingDetails;