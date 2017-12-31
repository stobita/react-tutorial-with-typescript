import * as React from 'react';

interface SquareProps {
  squareValue: string;
  squareClick(row: number, col: number): void;
  rowPosition: number;
  colPosition: number;
}

const square = (props: SquareProps) => {
  const squareClick = () => {
    if (!props.squareValue.match(/[◯×]/)) {
      props.squareClick(
        props.rowPosition,
        props.colPosition,
      );
    }
  };
  return (
    <div className="square" onClick={() => squareClick()}>
      <span>{props.squareValue}</span>
    </div>
  );
};

export default square;
