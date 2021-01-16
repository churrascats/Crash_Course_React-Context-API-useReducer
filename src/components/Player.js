import React from 'react';

import { useGameContext } from '../contexts/GameContext';

export default function Player() {
  const {
    state: { isXNext },
  } = useGameContext();

  return <h1>Player: {isXNext ? 'X' : 'O'}</h1>;
}
