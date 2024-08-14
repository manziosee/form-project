import React, { useState } from 'react';
import './DuskdelightSettingPowder.css';

function DuskdelightSettingPowder({ onNext, onBack }) {
  const [selectedTone, setSelectedTone] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const tones = [
    { id: 1, src: require('../assets/Dusk delight Setting Powder 1.jpg'), alt: 'Skin Tone 1' },
    { id: 2, src: require('../assets/Dusk delight Setting Powder 2.jpg'), alt: 'Skin Tone 2' },
    { id: 3, src: require('../assets/Dusk delight Setting Powder 3.jpg'), alt: 'Skin Tone 3' },
    { id: 4, src: require('../assets/Dusk delight Setting Powder 4.jpg'), alt: 'Skin Tone 4' },
    { id: 5, src: require('../assets/Dusk delight Setting Powder 5.jpg'), alt: 'Skin Tone 5' },
    { id: 6, src: require('../assets/Dusk delight Setting Powder 6.jpg'), alt: 'Skin Tone 6' },
    
  ];

  const handleSelect = (id) => {
    setSelectedTone(id);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="duskdelight">
      <h2 onClick={toggleCollapse} className="section-header">
        Dusk Delight Setting Powder
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

export default DuskdelightSettingPowder;
