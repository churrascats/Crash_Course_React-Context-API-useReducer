import React from 'react';

import { useGameContext } from '../contexts/GameContext'

export default function Winner() {
  const state = useGameContext()
  const { whoIsWinner } = state;

  if (!whoIsWinner) return <></>;
  return <p className="winner">{whoIsWinner} ganhou!!!</p>;
}
