import React from 'react';
import './FeedbackPage.css';

function FeedbackPage({ onBack }) {  // Add onBack prop
  return (
    <div className="feedback-page">
      <div className="feedback-content">
        <h1 className="thank-you-header">Thank You for Booking with Us!</h1>
        <p className="thank-you-text">
          We appreciate your interest in our makeup services. Thank you for filling out the form!
        </p>
        <h2 className="what-next-header">What Happens Next?</h2>
        <ul className="what-next-list">
          <li>Our team will review your preferences and create a customized makeup plan just for you.</li>
          <li>You'll receive an email or phone call within 24 hours to confirm your appointment details.</li>
          <li>In the meantime, feel free to explore our website and follow us on social media for makeup tips and inspiration.</li>
        </ul>
        <h2 className="contact-header">Contact Us</h2>
        <p className="contact-text">
          Have any questions? Feel free to reach out:
        </p>
        <p className="contact-details">
          <strong>Email:</strong> <a href="mailto:info@makeup.com">info@makeup.com</a><br />
          <strong>Phone:</strong> <a href="tel:+250781728282">+250781728282</a>
        </p>
        <p className="closing-text">We can't wait to make you fabulous! 💄❤️</p>
        <div className="button-group">
          <button type="button" className="btn back-btn" onClick={onBack}>Back</button>
          <button type="submit" className="btn submit-btn">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default FeedbackPage;
