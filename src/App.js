import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.png';
import background from './assets/background.jpg';
import PersonalInformation from './components/PersonalInformation';
import BookingDetails from './components/BookingDetails';
import SkinTonePicker from './components/SkinTonePicker';
import MakeUpStyle from './components/MakeUpStyle';

function App() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
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
          {step === 3 && <MakeUpStyle onBack={handleBack} />}
          
          {step < 3 && (
            <div className="navigation-buttons">
              {step > 1 && (
                <button onClick={handleBack} className="back-button">
                  Back
                </button>
              )}
              {step < 2 && (
                <button onClick={handleNext} className="next-button">
                  Next
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
