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
    <div className="form-section">
      <div className="formz-section">
        <h2 onClick={toggleCollapse} className="section-header">
          Makeup Style
          <span className="toggle-button">
            <img className="dropdown" src={dropdown} alt="Toggle" />
          </span>
        </h2>
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
        </form>
      )}
    </div>
  );
}

export default MakeUpStyle;
