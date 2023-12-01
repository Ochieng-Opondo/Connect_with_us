import React, { useState } from 'react';

export default function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="header-slot" style={{ height: '50px', display: 'flex', paddingLeft: '10px', paddingRight: '10px', justifyContent: 'space-between', alignItems: 'center' }}>
      <p className="logo" style={{ padding: 0 }}>CONNECT WITH US</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center', alignContent: 'center', height: 'fit' }}>
        <button className='btn' onClick={togglePopup}>
          Sign In
        </button>
        <button className='btn' onClick={togglePopup}>
          Log In
        </button>
      </div>
      {isPopupOpen && (
        <div className="popup-container" style={{ backgroundColor: 'green', color: 'white', position: 'absolute', top: '50px', right: '10px', padding: '10px', borderRadius: '5px' }}>
          {/* Form content goes here */}
        </div>
      )}
    </div>
  );
}
