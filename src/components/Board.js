import React, { useEffect, useState } from 'react';
import uuid from 'uuid/v4';

import calculateWinner from '../utils/calculateWinner';

import Square from './Square';
import Player from './Player';
import Reset from './Reset';
import Winner from './Winner';
import History from './History';

export default function Board() {
  
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [whoIsWinner, setWhoIsWinner] = useState('');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const winner = calculateWinner(squares);

    if (winner) {
      setWhoIsWinner(winner);
    }
  }, [history, setWhoIsWinner, squares]);

  return (
    <div className="board-container">
      <Player isXNext = {isXNext}/>
      <Winner whoIsWinner = {whoIsWinner}/>
      <Reset setSquares = {setSquares} setIsXNext = {setIsXNext} setWhoIsWinner = {setWhoIsWinner} setHistory = {setHistory}/>
      <div className="board">
        {squares.map((value, index) => (
          <Square squares = {squares} setSquares = {setSquares} isXNext = {isXNext} setIsXNext = {setIsXNext} whoIsWinner = {whoIsWinner} history = {history}  setHistory = {setHistory} value={value} index={index} key={uuid()} />
        ))}
      </div>

      <History history = {history} setHistory = {setHistory} setSquares = {setSquares} setIsXNext = {setIsXNext} setWhoIsWinner = {setWhoIsWinner}/>
    </div>
  );
}


