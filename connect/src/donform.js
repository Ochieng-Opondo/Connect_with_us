import React, { useState } from 'react';

function DonForm() {
  const [donationAmount, setDonationAmount] = useState(0);
  const [totalAmountDonated, setTotalAmountDonated] = useState(0);
  const handleDonationAmountChange = (event) => {
    const amount = parseFloat(event.target.value);
    setDonationAmount(amount);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setTotalAmountDonated((prevAmount) => prevAmount + donationAmount);
    setDonationAmount(0);
  };
  return (
    <div className='dom'>
      <form onSubmit={handleFormSubmit}>
        <h1>DONATION FORM</h1>
        <div className="form-group">
          <label htmlFor="donation-amount">Amount To Be Donated</label>
          <input
            type="number"
            id="donation-amount"
            name="donation-amount"
            value={donationAmount}
            onChange={handleDonationAmountChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="total-amount-donated">Total Amount Donated</label>
          <input
            type="number"
            id="total-amount-donated"
            name="total-amount-donated"
            value={totalAmountDonated}
            readOnly
          />
        </div>
        <button type="submit">Donate</button>
        <p>Donation Target: $50,000,000</p>
      </form>
    </div>
  );
}
export default DonForm;