import React, { useState } from 'react';
import './TruffleDustPressPowder.css';

function TruffleDustPressPowder({ onSelectTone }) {
  const [selectedTone, setSelectedTone] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const tones = [
    { id: 1, src: require('../assets/truffleDust 1.jpg'), alt: 'Skin Tone 1' },
    { id: 2, src: require('../assets/truffleDust 2.jpg'), alt: 'Skin Tone 2' },
    { id: 3, src: require('../assets/truffleDust 3.jpg'), alt: 'Skin Tone 3' },
    { id: 4, src: require('../assets/truffleDust 4.jpg'), alt: 'Skin Tone 4' },
    { id: 5, src: require('../assets/truffleDust 5.jpg'), alt: 'Skin Tone 5' },
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
          Truffle Dust Press Powder
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

export default TruffleDustPressPowder;
