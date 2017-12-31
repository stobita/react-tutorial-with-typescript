import * as React from 'react';
import BoardRow from './BoardRow';

interface BoardProps{
  squares: string[][];
  squareClick(): void;
}

const board = (props: BoardProps) => {
  return (
    <div className="board">
      {props.squares.map((row: string[], index: number) => {
        return (
          <BoardRow
            key={index}
            rowLine={row}
            squareClick={props.squareClick}
            rowPosition={index}
          />
        );
      })}
    </div>
  );
};



export default board;
