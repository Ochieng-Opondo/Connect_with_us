import React, { useState, useEffect } from 'react';

function About() {
  const [cardObject, setCardObject] = useState([]);
  const [progress, setProgress] = useState({});


  function handleClick(event) {
    event.preventDefault();
    const amount = prompt('Enter Amount To Donate');
    // update the progress state for the clicked card
    setProgress((prevState) => ({
      ...prevState,
      [event.target.id]: (amount / 100000) * 100,
    }));
  }

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/James-Kamau3/Hope-Funding-Organisation/cardObject')
      .then((res) => res.json())
      .then((data) => {
        // initialize the progress state for each card
        const initProgress = data.reduce(
          (obj, card) => ({ ...obj, [card.id]: 0 }),
          {}
        );
        setProgress(initProgress);
        setCardObject(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="Cards">
      {cardObject.map((card) => (
        <div key={card.id}>
           <h3>{card.title}</h3>
          <br />
          {card.description}
          <br />
          <img src={card.imageUrl} alt="img" />
          <button id={card.id} onClick={handleClick}>
            Donate
          </button>
          <p id='prog'>
            Progress: {progress[card.id] ? progress[card.id].toFixed(2) : 0}% ($
            {progress[card.id] ? (progress[card.id] / 100) * 100000 : 0} out of $
            100,000)
          </p>
        </div>
      ))}
    </div>
  );
}

export default About;