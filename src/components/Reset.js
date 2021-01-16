import React from 'react';

import { useGameContext } from '../contexts/GameContext';

export default function Reset() {
  const { dispatch } = useGameContext();

  function handleClick() {
    dispatch({ type: 'RESET_GAME' });
  }

  return (
    <p className="reset">
      <button type="button" onClick={handleClick}>
        Reset
      </button>
    </p>
  );
}
