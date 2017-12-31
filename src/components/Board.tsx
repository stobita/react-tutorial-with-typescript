import * as React from 'react';

interface BoardProps{
  squares: string[][];
}

const board = (props: BoardProps) => {
  return (
    <h2>Squares!</h2>
  );
};

export default board;
