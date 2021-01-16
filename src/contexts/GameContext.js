import React, { createContext, useReducer, useContext } from 'react';

const GameContext = createContext();
export const useGameContext = () => useContext(GameContext);

export default function GameContextProvider({ children }) {
  const INITIAL_STATE = {
    squares: Array(9).fill(null),
    isXNext: true,
    whoIsWinner: '',
    history: [],
  };

  function reducer(previousState, action) {
    switch (action.type) {
      case 'UPDATE_SQUARES': {

        const {history, squares, isXNext, whoIsWinner} = previousState
        const newHistory = [
          ...history,
          {
            squares: [...squares],
            isXNext,
            whoIsWinner,
          },
        ]

        const newState = {...previousState}
        newState.squares = action.payload
        newState.isXNext = !isXNext
        newState.history = newHistory
        
        return newState;
      }
      case 'SET_WINNER' : {
        return {...previousState, whoIsWinner : action.payload}
      }
      case 'RESET_GAME' : {
        return INITIAL_STATE
      }
      case 'SET_NEW_HISTORY' : {
        const [history, index] = action.payload
        const {squares, whoIsWinner, isXNext} = history[index]

        const newHistory = [...history]
        newHistory.splice(index, Number.MAX_SAFE_INTEGER)

        const newState = {
          ...previousState,
          squares, 
          whoIsWinner,
          isXNext,
          history : newHistory
        }
        
        return newState
      }


      default:
        return previousState;
    }
  }

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}
