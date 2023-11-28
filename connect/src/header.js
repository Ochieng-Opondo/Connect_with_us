import React, { useState } from 'react';

function Header() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [actionType, setActionType] = useState('');

  const handleSignInClick = () => {
    setShowForm(true);
    setActionType('Sign In');
  };

  const handleLogInClick = () => {
    setShowForm(true);
    setActionType('Log In');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Implement your authentication logic here
    console.log(`${actionType} with email: ${email} and password: ${password} submitted`);
    // Reset form inputs and hide form
    setEmail('');
    setPassword('');
    setShowForm(false);
  };

  return (
    <div>
      <div className='head'>
        <nav className='nav'>
          <h1 id='h1'>Hope Funding Organisation</h1>
          <div className='container'>
            <button className='btn' onClick={handleSignInClick}>
              Sign In
            </button>
            <button className='btn' onClick={handleLogInClick}>
              Log In
            </button>
          </div>
        </nav>

        {showForm && (
          <form className='form' onSubmit={handleFormSubmit}>
            <h2>{actionType}</h2>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type='submit'>{actionType}</button>
          </form>
        )}

        <article id='art'>Connect with us Funding Campaigns</article>
        <p className='txt'>
          We’ve helped people from all over Kenya crowdfund <br></br>
          the things that matter to them most. From personal fundraisers, <br></br>
          to acts of kindness, emergency relief, and more. <br></br>
          Create your campaign for free!
        </p>
        <img id='pic' src='https://shorturl.at/EGP45' alt='' />
      </div>
    </div>
  );
}

export default Header;