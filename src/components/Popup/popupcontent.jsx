// PopupComponent.jsx
import React, { useState } from 'react';
import './PopupComponent.css'; // Import CSS for styling

const PopupComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedApp, setSelectedApp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setError(false); // Reset error when opening popup
    setLoading(false); // Reset loading state
  };

  const handleAppSelection = (app) => {
    setSelectedApp(app);
    setError(false); // Reset error when selecting a new app
    setLoading(true); // Start loading when a new app is selected
  };

  return (
    <div>
      <button onClick={togglePopup} className="popup-button">
        🔴 {/* This can be any icon or emoji */}
      </button>

      {isOpen && (
        <div className="popup-container">
          <div className="popup-content">
            <h2>Select an Eco-Friendly Assistant</h2>
            <button onClick={() => handleAppSelection("https://3072c9896cf840225e.gradio.live")}>
              Eco Assistant 1
            </button>
            <button onClick={() => handleAppSelection("https://newwwwww-nlytaozdujas4oxdmaay5q.streamlit.app/")}>
              Eco Assistant 2
            </button>

            {selectedApp && (
              <>
                <h3>Selected Assistant:</h3>
                {loading && <p>Loading...</p>}
                <iframe
                  src={selectedApp}
                  title="Eco-Friendly Assistant"
                  width="300"
                  height="300"
                  style={{ border: 'none' }}
                  onLoad={() => {
                    setLoading(false); // Stop loading on successful load
                    setError(false); // Reset error on successful load
                  }}
                  onError={() => {
                    setLoading(false); // Stop loading on error
                    setError(true); // Set error if iframe fails to load
                  }}
                />
                {error && <p style={{ color: 'red' }}>Failed to load the assistant. Please try again.</p>}
              </>
            )}

            <button onClick={togglePopup} className="close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupComponent;