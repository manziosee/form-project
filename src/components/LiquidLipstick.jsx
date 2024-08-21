import React, { useState } from 'react';
import './LiquidLipstick.css';

function LiquidLipstick({ onSelectTone }) {
  const [selectedTone, setSelectedTone] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const tones = [
    { id: 1, src: require('../assets/Liquid Lipstick 1.jpg'), alt: 'Skin Tone 1' },
    { id: 2, src: require('../assets/Liquid Lipstick 2.jpg'), alt: 'Skin Tone 2' },
    { id: 3, src: require('../assets/Liquid Lipstick 3.jpg'), alt: 'Skin Tone 3' },
    { id: 4, src: require('../assets/Liquid Lipstick 4.jpg'), alt: 'Skin Tone 4' },
    { id: 5, src: require('../assets/Liquid Lipstick 5.jpg'), alt: 'Skin Tone 5' },
  ];

  const handleSelect = (id) => {
    setSelectedTone(id);
    onSelectTone(id);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="form-section">
      <div className="formz-section">
        <h2 onClick={toggleCollapse} className="section-header">
          Liquid Lipstick
          <span className={`collapse-icon ${isCollapsed ? 'collapsed' : ''}`}>▼</span>
        </h2>
      </div>
      {!isCollapsed && (
        <div className="tones-grid">
          {tones.map((tone) => (
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

export default LiquidLipstick;
