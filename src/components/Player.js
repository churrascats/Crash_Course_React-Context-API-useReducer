import React from 'react';

export default function Player(props) {
  const { isXNext } = props;

  return <h1>Player: {isXNext ? 'X' : 'O'}</h1>;
}
