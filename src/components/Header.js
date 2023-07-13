import React from "react";

function Header(props) {
  const { currentScore, highScore } = props;
  return (
    <div>
      <h1>Memory Game</h1>
      <div>
        <h3>Current Score: {currentScore}</h3>
        <h3>High Score: {highScore}</h3>
      </div>
    </div>
  );
}

export default Header;
