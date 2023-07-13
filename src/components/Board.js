import React, { useState, useEffect } from "react";
import Card from "./Card";
import uniqid from "uniqid";

const Board = (props) => {
  const { seen, setSeen, setGameOver, currentScore, setCurrentScore } = props;
  const numCards = 10;

  const getNewCards = (n) => {
    const newCards = [];
    for (let i = 0; i < n; i++) {
      newCards.push({ id: uniqid(), image: Math.ceil(20 * Math.random()) });
    }
    return newCards;
  };

  useEffect(() => {
    const newCards = getNewCards(numCards);
    setCards(newCards);
  }, [seen]);

  const [cards, setCards] = useState([]);

  return (
    <div className="board">
      {cards.map((card) => (
        <Card
          key={card.id}
          imgNumber={card.image}
          setCards={setCards}
          setGameOver={setGameOver}
          seen={seen}
          setSeen={setSeen}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
        />
      ))}
    </div>
  );
};

export default Board;
