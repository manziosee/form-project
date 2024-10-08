import React, { useState } from 'react';
import dropdown from '../assets/dropdown.svg'; // Importing the dropdown icon
import './SkinTonePicker.css';

function SkinTonePicker({ onNext, onBack, onSelectTone }) {
  const [selectedTone, setSelectedTone] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showUpload, setShowUpload] = useState(false);

  const tones = [
    { id: 1, src: require('../assets/image 1.jpg'), alt: 'Skin Tone 1' },
    { id: 2, src: require('../assets/image 2.jpg'), alt: 'Skin Tone 2' },
    { id: 3, src: require('../assets/image 3.jpg'), alt: 'Skin Tone 3' },
    { id: 4, src: require('../assets/image 4.jpg'), alt: 'Skin Tone 4' },
  ];

  const handleSelect = (id) => {
    setSelectedTone(id);
    onSelectTone(id);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleRadioChange = (e) => {
    setShowUpload(e.target.value === 'upload');
  };

  return (
    <div className="form-section">
      <div className="formz-section">
        <h2 onClick={toggleCollapse} className="section-header">
          Pick your skin tone
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
          <div className="upload-section">
            <label>
              <input 
                type="radio" 
                value="upload" 
                name="tone-option" 
                onChange={handleRadioChange} 
              />
              Can't find your tone?
            </label>
            {showUpload && (
              <div className="upload-box">
                <div className="upload-placeholder">
                  <span>Upload your picture</span>
                  <input type="file" />
                </div>
                <p>Upload a natural picture without filter</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default SkinTonePicker;
