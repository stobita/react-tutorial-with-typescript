import * as React from 'react';
import Square from './Square';

interface BoardRowProps{
  rowLine: string[];
}

const boardRow = (props: BoardRowProps) => {
  return (
    <div className="boardRow">
      {props.rowLine.map((value, index) => {
        return <Square squareValue={value}/>;
      })}
    </div>
  );
};

export default boardRow;
