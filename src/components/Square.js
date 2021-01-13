import React from 'react';

import { useGameContext } from '../contexts/GameContext'
import t from 'prop-types';


export default function Square(props) {

  const {value, index} = props

  const state = useGameContext()
  const {
    squares,
    setSquares,
    isXNext,
    setIsXNext,
    whoIsWinner,
    history,
    setHistory
  } = state

  function handleClick() {
    if (squares[index]) return;
    if (whoIsWinner) return;

    const newSquares = [...squares];
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);

    setHistory([
      ...history,
      {
        squares: [...squares],
        isXNext,
        whoIsWinner,
      },
    ]);
  }

  return (
    <button type="button" onClick={handleClick}>
      {value}
    </button>
  );
}

Square.defaultProps = {
  value: null,
};

Square.propTypes = {
  value: t.string,
  index: t.number.isRequired,
};
