import React, { useEffect } from 'react';
import './Home.css';

import Board from '../components/Board';
import GameContextProvider from '../contexts/GameContext'

export default function Home() {
  useEffect(() => {
    document.title = 'Jogo da velha com React';
  }, []);

  return (
    <GameContextProvider>
      <Board />
    </GameContextProvider>
  )
  
}