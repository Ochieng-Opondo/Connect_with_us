import React, { useState, useEffect } from 'react';

function About() {
  const [cardObject, setCardObject] = useState([]);
  const [progress, setProgress] = useState({});

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

  function handleClick(event) {
    event.preventDefault();
    const amount = prompt('Enter Amount To Donate');
    // update the progress state for the clicked card
    setProgress((prevState) => ({
      ...prevState,
      [event.target.id]: (amount / 100000) * 100,
    }));
  }

  function handleDelete(event, id) {
    event.preventDefault();
    // remove the deleted card from cardObject state
    setCardObject((prevCards) => prevCards.filter((card) => card.id !== id));
    // remove the deleted card's progress from progress state
    setProgress((prevProgress) => {
      const newProgress = { ...prevProgress };
      delete newProgress[id];
      return newProgress;
    });
  }

  function handleCreate(event) {
    event.preventDefault();
    const newCard = {
      id: cardObject.length + 1, // assign a unique id to the new card
      title: 'New Card',
      imageUrl: '',
      description: 'New Card Added.',
    };
    // add the new card to cardObject state
    setCardObject((prevCards) => [...prevCards, newCard]);
    // initialize the new card's progress as 0 in progress state
    setProgress((prevProgress) => ({
      ...prevProgress,
      [newCard.id]: 0,
    }));
  }
  
  function handleImageUpload(event, id) {
    const image = event.target.files[0];
    const imgUrl = URL.createObjectURL(image);
    setCardObject((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, imageUrl: imgUrl } : card
      )
    );
  }

  return (
    <>
      <div style={{ padding: '20px' }}>
        <div className="cards">
          {cardObject.map((card) => (
            <div className='card' key={card.id}>
              <img src={card.imageUrl} alt="img" />
              <h3>{card.title}</h3>
              <div className='description'>
                {card.description}
              </div>
              <div className="buttons">
                <button className='delete' onClick={(event) => handleDelete(event, card.id)}>
                  Delete
                </button>
                <button className='donate' id={card.id} onClick={handleClick}>
                  Donate
                </button>
              </div>
              <p id='prog'>
                Ksh{" "}
                {progress[card.id] ? (progress[card.id] / 100) * 100000 : 0} out of Ksh
                100,000 ({progress[card.id] ? progress[card.id].toFixed(2) : 0}% )
              </p>
            </div>
          ))}
          <div className='card createCard'>
            <input
              type="file"
              accept="image/*"
              onChange={(event) => handleImageUpload(event, cardObject.length + 1)}
            />
            <button className='create' onClick={handleCreate}>
              Create New Card
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
