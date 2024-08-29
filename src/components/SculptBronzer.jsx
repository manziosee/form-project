import React, { useState } from 'react';
import dropdown from '../assets/dropdown.svg';
import './SculptBronzer.css';

function SculptBronzer({ onSelectTone }) {
  const [selectedTone, setSelectedTone] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const tones = [
    { id: 1, src: require('../assets/Sculpt Bronzer 1.jpg'), alt: 'Skin Tone 1' },
    { id: 2, src: require('../assets/Sculpt Bronzer 2.jpg'), alt: 'Skin Tone 2' },
  ];

  const handleSelect = (id) => {
    setSelectedTone(id);
    onSelectTone(id); // Send the selected tone ID to the parent component
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="form-section">
      <div className="formz-section">
        <h2 onClick={toggleCollapse} className="section-header">
          Sculpt Bronzer
          <span className={`collapse-icon ${isCollapsed ? 'collapsed' : ''}`}>
          <img className="dropdown" src={dropdown} alt="Toggle" />
 </span>
        </h2>
      </div>
      {!isCollapsed && (
        <>
          <div className="tones-grid">
            {tones.map(tone => (
              <img
                key={tone.id}
                src={tone.src}
                alt={tone.alt}
                className={selectedTone === tone.id ? 'selected' : ''}
                onClick={() => handleSelect(tone.id)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default SculptBronzer;
