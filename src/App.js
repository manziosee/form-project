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
import LipGloss from './components/LipGloss';
import LipLiner from './components/LipLiner';
import Lipstick from './components/Lipstick';
import LiquidLipstick from './components/LiquidLipstick';
import SilhouetteLiner from './components/SilhouetteLiner';

function App() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 7) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSelectTone = (id) => {
    console.log(`Selected tone ID: ${id}`);
    // You can send this ID to the backend or use it as needed
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
          {step === 2 && <SkinTonePicker onSelectTone={handleSelectTone} onNext={handleNext} onBack={handleBack} />}
          {step === 3 && <MakeUpStyle onSelectTone={handleSelectTone} onNext={handleNext} onBack={handleBack} />}
          {step === 4 && (
            <>
              <Foundation onSelectTone={handleSelectTone} />
              <TruffleDustPressPowder onSelectTone={handleSelectTone} />
              <DuskdelightSettingPowder onSelectTone={handleSelectTone} />
              <SculptingConcealer onSelectTone={handleSelectTone} />
              <SculptBronzer onSelectTone={handleSelectTone} />
              <GlowBeamHighlighter onSelectTone={handleSelectTone} />
              <Blusher onSelectTone={handleSelectTone} />
            </>
          )}
          {step === 5 && (
            <>
              <EyebrowGel onSelectTone={handleSelectTone} />
              <EyeShadowMascar onSelectTone={handleSelectTone} />
              <GelLiner onSelectTone={handleSelectTone} />
            </>
          )}
          {step === 6 && (
            <>
              <Lipstick onSelectTone={handleSelectTone} />
              <LiquidLipstick onSelectTone={handleSelectTone} />
              <LipGloss onSelectTone={handleSelectTone} />
              <LipLiner onSelectTone={handleSelectTone} />
              <SilhouetteLiner onSelectTone={handleSelectTone} />
            </>
          )}
          {step === 7 && <FeedbackPage onBack={handleBack} />}

          <div className="navigation-buttons">
            {step > 1 && (
              <button onClick={handleBack} className="back-button">
                Back
              </button>
            )}
            {step < 7 && (
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
