import React from 'react';

import { useGameContext } from '../contexts/GameContext'

export default function Reset() {
  const state = useGameContext()
  const { setSquares, setIsXNext, setWhoIsWinner, setHistory } = state

  function handleClick() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWhoIsWinner('');
    setHistory([]);
  }

  return (
    <p className="reset">
      <button type="button" onClick={handleClick}>
        Reset
      </button>
    </p>
  );
}
