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
    <>
      {/* <div className="Cards">
        {cardObject.map((card) => (
          <div key={card.id}>
            <h3>{card.title}</h3>
            <br />
            <br />
            <img src={card.imageUrl} alt="img" />
            {card.description}
            <br></br>
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
      </div> */}

      <div style={{ padding: '20px' }}>
        <div className="cards">
          {cardObject.map((card) => (
            <div className='card' key={card.id}>
              <img src={card.imageUrl} alt="img" />
              <h3>{card.title}</h3>
              <div className='description'>
              {card.description}
              </div>
              <br />
              <button className='donate' id={card.id} onClick={handleClick}>
                Donate
              </button>
              <p id='prog'>
              Ksh{" "}
                {progress[card.id] ? (progress[card.id] / 100) * 100000 : 0} out of Ksh
                100,000 ({progress[card.id] ? progress[card.id].toFixed(2) : 0}% )
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;