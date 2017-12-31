import * as React from 'react';
import Square from './Square';

interface BoardRowProps{
  rowLine: string[];
  squareClick(): void;
  rowPosition: number;
}

const boardRow = (props: BoardRowProps) => {
  return (
    <div className="board-row">
      {props.rowLine.map((value, index) => {
        return (
          <Square
            key={index}
            squareValue={value}
            squareClick={props.squareClick}
            rowPosition={props.rowPosition}
            colPosition={index}
          />
        );
      })}
    </div>
  );
};

export default boardRow;
