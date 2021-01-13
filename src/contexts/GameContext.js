import React, { createContext, useState, useContext} from 'react';

const GameContext = createContext();
export const useGameContext = () => useContext(GameContext)

export default function GameContextProvider({ children }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [whoIsWinner, setWhoIsWinner] = useState('');
  const [history, setHistory] = useState([]);

  const state = {
    squares,
    setSquares,
    isXNext,
    setIsXNext,
    whoIsWinner,
    setWhoIsWinner,
    history,
    setHistory,
  };

  return <GameContext.Provider value={state}>{children}</GameContext.Provider>;
}
