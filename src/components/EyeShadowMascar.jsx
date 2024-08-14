import React, { useState } from 'react';
import './Blusher.css';

function EyeShadowMascar({ onNext, onBack }) {
  const [selectedTone, setSelectedTone] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const tones = [
    { id: 1, src: require('../assets/Eyeshadow.jpg'), alt: 'Skin Tone 1' },
    { id: 2, src: require('../assets/EyeshadowMascara 1.jpg'), alt: 'Skin Tone 2' },
    { id: 3, src: require('../assets/EyeshadowMascara 2.jpg'), alt: 'Skin Tone 3' },
  ];

  const handleSelect = (id) => {
    setSelectedTone(id);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="eyeshadow">
      <h2 onClick={toggleCollapse} className="section-header">
      EyeShadow&Mascara
        <span className={`collapse-icon ${isCollapsed ? 'collapsed' : ''}`}>▼</span>
      </h2>
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

export default EyeShadowMascar;
