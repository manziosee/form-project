import React, { useState } from 'react';
import './Lipstick.css';

function Lipstick() {
  const [selectedTone, setSelectedTone] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const tones = [
    { id: 1, src: require('../assets/Lipstick 1.jpg'), alt: 'Skin Tone 1' },
    { id: 2, src: require('../assets/Lipstick 2.jpg'), alt: 'Skin Tone 2' },
    { id: 3, src: require('../assets/Lipstick 3.jpg'), alt: 'Skin Tone 3' },
  ];

  const handleSelect = (id) => {
    setSelectedTone(id);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="lipstick">
      <h2 onClick={toggleCollapse} className="section-header">
        Lipstick
        <span className={`collapse-icon ${isCollapsed ? 'collapsed' : ''}`}>▼</span>
      </h2>
      {!isCollapsed && (
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
      )}
    </div>
  );
}

export default Lipstick;
