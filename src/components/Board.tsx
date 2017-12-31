import * as React from 'react';
import BoardRow from './BoardRow';

interface BoardProps{
  squares: string[][];
}



const board = (props: BoardProps) => {
  return (
    <div className="board">
      {props.squares.map((row: string[], index: number) => {
        return (
          <BoardRow rowLine={row} />
        );
      })}
    </div>
  );
};



export default board;
