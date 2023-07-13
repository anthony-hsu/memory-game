import React, { useState, useEffect } from "react";
import Board from "./components/Board";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [seen, setSeen] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    setGameOver(false);
    setCurrentScore(0);
  }, [gameOver]);

  useEffect(() => {
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
  }, [currentScore, highScore]);

  return (
    <div className="App">
      <Header currentScore={currentScore} highScore={highScore} />
      <Board seen={seen} setSeen={setSeen} setGameOver={setGameOver} currentScore={currentScore} setCurrentScore={setCurrentScore} />
    </div>
  );
}

export default App;
