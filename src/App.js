import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.png';
import background from './assets/background.jpg';
import PersonalInformation from './components/PersonalInformation';
import BookingDetails from './components/BookingDetails';

function App() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  return (
    <div className="app">
      <div className="background" style={{ backgroundImage: `url(${background})` }}></div>
      <div className="overlay">
        <img src={logo} alt="Logo" className="logo" />
        <div className="form-container">
          <PersonalInformation />
          <BookingDetails />
          <button onClick={handleNext} className="next-button">Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;