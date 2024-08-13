import React, { useState } from 'react';
import dropdown from '../assets/dropdown.svg';
import './MakeUpStyle.css';

function MakeUpStyle() {
  const [selectedStyle, setSelectedStyle] = useState('Full Glam');
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleChange = (e) => {
    setSelectedStyle(e.target.value);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`makeup-style-section ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="formz-section">
        <div onClick={toggleCollapse} className="section-header">
          Makeup Style
          <span className="toggle-button">
            <img className="dropdown" src={dropdown} alt="Toggle" />
          </span>
        </div>
      </div>
      {!isCollapsed && (
        <form className="form-content">
          <div className="form-group">
            <label htmlFor="makeup-style" className="form-label">Makeup Style</label>
            <div className="radio-group">
              {['Full Glam', 'Soft Glam', 'Nude', 'Celebrity', 'HD', 'Monochromatic', 'Artistic'].map((style) => (
                <div key={style} className="radio-option">
                  <input
                    type="radio"
                    id={style}
                    name="makeup-style"
                    value={style}
                    checked={selectedStyle === style}
                    onChange={handleChange}
                  />
                  <label htmlFor={style}>{style}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="button-group">
            <button type="button" className="btn back-btn">Back</button>
            <button type="button" className="btn next-btn">Next</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default MakeUpStyle;
