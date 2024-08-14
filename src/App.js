import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.png';
import background from './assets/background.jpg';
import PersonalInformation from './components/PersonalInformation';
import BookingDetails from './components/BookingDetails';
import SkinTonePicker from './components/SkinTonePicker';
import MakeUpStyle from './components/MakeUpStyle';
import Foundation from './components/Foundation';
import TruffleDustPressPowder from './components/TruffleDustPressPowder';
import DuskdelightSettingPowder from './components/DuskdelightSettingPowder';
import SculptingConcealer from './components/SculptingConcealer';
import SculptBronzer from './components/SculptBronzer';
import GlowBeamHighlighter from './components/GlowBeamHighlighter';
import Blusher from './components/Blusher';
import EyebrowGel from './components/EyebrowGel';
import EyeShadowMascar from './components/EyeShadowMascar';
import GelLiner from './components/GelLiner';
import FeedbackPage from './components/FeedbackPage';

function App() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 6) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="app">
      <div className="background" style={{ backgroundImage: `url(${background})` }}></div>
      <div className="overlay">
        <img src={logo} alt="Logo" className="logo" />
        <div className="form-container">
          {step === 1 && (
            <>
              <PersonalInformation />
              <BookingDetails />
            </>
          )}
          {step === 2 && <SkinTonePicker onNext={handleNext} onBack={handleBack} />}
          {step === 3 && <MakeUpStyle onNext={handleNext} onBack={handleBack} />}
          {step === 4 && (
            <>
              <Foundation />
              <TruffleDustPressPowder />
              <DuskdelightSettingPowder />
              <SculptingConcealer />
              <SculptBronzer />
              <GlowBeamHighlighter />
              <Blusher />
            </>
          )}
          {step === 5 && (
            <>
              <EyebrowGel />
              <EyeShadowMascar />
              <GelLiner />
            </>
          )}
          {step === 6 && <FeedbackPage onBack={handleBack} />}

          <div className="navigation-buttons">
            {step > 1 && (
              <button onClick={handleBack} className="back-button">
                Back
              </button>
            )}
            {step < 6 && (
              <button onClick={handleNext} className="next-button">
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
