import React, { useState } from 'react';
import './Blusher.css';

function Blusher() {
  const [selectedTone, setSelectedTone] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const tones = [
    { id: 1, src: require('../assets/blusher 1.jpg'), alt: 'Skin Tone 1' },
    { id: 2, src: require('../assets/blusher 2.jpg'), alt: 'Skin Tone 2' },
  ];

  const handleSelect = (id) => {
    setSelectedTone(id);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="form-section">
      <div className="formz-section">
        <h2 onClick={toggleCollapse} className="section-header">
          Blusher 
          <span className={`collapse-icon ${isCollapsed ? 'collapsed' : ''}`}>▼</span>
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

export default Blusher;
