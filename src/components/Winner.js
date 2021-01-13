import React from 'react';


export default function Winner(props) {
  const { whoIsWinner } = props;

  if (!whoIsWinner) return <></>;
  return <p className="winner">{whoIsWinner} ganhou!!!</p>;
}
