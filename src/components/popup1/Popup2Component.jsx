// PopupComponent.jsx
import React, { useState } from 'react';
import './Popup2Component.css'; // Import CSS for styling

const PopupComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={togglePopup} className="popup-button">
      🔴 {/* This can be any icon or emoji */}
      </button>

      {isOpen && (
        <div className="popup-container">
          <div className="popup-content">
            <h2>Eco-Friendly Assistant Chat</h2>
            <iframe
              src="https://newwwwww-nlytaozdujas4oxdmaay5q.streamlit.app/"
              title="Eco-Friendly Assistant"
              width="300"
              height="300"
              style={{ border: 'none' }}
            />
            <button onClick={togglePopup} className="close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupComponent;