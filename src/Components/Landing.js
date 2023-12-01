import React, { useState } from 'react';

function Landing() {
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
    <div className='head'>
      <div style={{ height: '100%'}}>
        <article id='art'>CONNECT WITH US</article>
        <p className='txt'>
          We’ve helped people from all over Kenya crowdfund <br></br>
          the things that matter to them most. From personal fundraisers, <br></br>
          to acts of kindness, emergency relief, and more. <br></br>
          Create your campaign for free!
        </p>
      </div>
      <img id='pic' src='https://shorturl.at/EGP45' alt='' />
    </div>

  );
}

export default Landing;