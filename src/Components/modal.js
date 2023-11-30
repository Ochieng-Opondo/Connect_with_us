import React, { useState } from "react";
import "app.css";

export default function Modal() {
  const [modal, setModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("User input value:", inputValue);
    setTotalAmount((prevAmount) => prevAmount + Number(inputValue));
    setInputValue("");
  };

  const percentage = Math.min((totalAmount / 100000) * 100, 100);

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <form onSubmit={handleSubmit}>
              <p>
                <label htmlFor="input">Enter a number:</label>
                <input
                  type="number"
                  id="input"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </p>
              <button type="submit">Submit</button>
            </form>

            <div className="progress-bar">
              <span className="target">Target: $100,000</span>
              <div className="bar-wrapper">
                <div className="bar" style={{ width: `${percentage}%` }}>
                  {percentage.toFixed(1)}%
                </div>
              </div>
              <span className="total-amount">{`$${totalAmount}`}</span>
            </div>

            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}