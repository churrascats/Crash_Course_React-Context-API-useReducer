import React, { useContext } from 'react';
import { useGameContext } from '../contexts/GameContext';
import uuid from 'uuid/v4';

export default function Board() {
  const {
    state: { history },
    dispatch,
  } = useGameContext();

  function handleClick(index) {
    dispatch({ type: 'SET_NEW_HISTORY', payload: [history, index] });
  }

  return (
    <div>
      {history.map((data, index) => (
        <div key={uuid()} className="history">
          <button type="button" onClick={() => handleClick(index)}>
            Voltar para jogada {index}
          </button>
        </div>
      ))}
    </div>
  );
}
