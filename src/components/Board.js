import React, { useEffect } from 'react';
import uuid from 'uuid/v4';

import calculateWinner from '../utils/calculateWinner';

import Square from './Square';
import Player from './Player';
import Reset from './Reset';
import Winner from './Winner';
import History from './History';

import { useGameContext } from '../contexts/GameContext'

export default function Board() {

  const state = useGameContext()

   const {
    squares,
    setSquares,
    isXNext,
    setIsXNext,
    whoIsWinner,
    setWhoIsWinner,
    history,
    setHistory,
  } = state

  useEffect(() => {
    const winner = calculateWinner(squares);

    if (winner) {
      setWhoIsWinner(winner);
    }
  }, [history, setWhoIsWinner, squares]);

  return (
    <div className="board-container">
      <Player />
      <Winner/>
      <Reset />
      <div className="board">
        {squares.map((value, index) => (
          <Square value={value} index={index} key={uuid()} />
        ))}
      </div>

      <History />
    </div>
  );
}


