import React from 'react';

export default function Reset(props) {
  const { setSquares, setIsXNext, setWhoIsWinner, setHistory } = props

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
