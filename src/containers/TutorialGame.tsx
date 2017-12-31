import * as React from 'react';
import Board from '../components/Board';

interface TutorialGameProps {
  store: {
    value: string,
    squares: string[][],
    isFirst: boolean,
    winner: string,
  };
}

interface TutorialGameState {
  value: string;
  squares: string[][];
  isFirst: boolean;
  winner: string;
}

class TutorialGame extends React.Component<TutorialGameProps, TutorialGameState>{
  constructor(props: TutorialGameProps) {
    super(props);
    this.state = this.props.store;
  }
  // マスがクリックされたとき
  clickSquare(row: number,col: number) {
    const nowPlayer = this.state.isFirst ? '◯' : '×';
    const newArray = this.state.squares.slice();
    newArray[row][col] = nowPlayer;
    this.setState({
      squares: newArray,
      isFirst: !this.state.isFirst,
      winner: calculateWinner(this.state.squares),
    });
  }
  render() {
    return (
      <div className="contents">
        <h1>{this.props.store.value}</h1>
        <Board
          squares={this.props.store.squares}
          squareClick={this.clickSquare.bind(this)}
        />
      </div>
    );
  }
}

// 勝敗判定
const calculateWinner = (squares: string[][]) => {
  let winner;
  winner = checkDiagonal(squares) || checkCol(squares);
  if (!winner) {
    squares.some((row, rowIndex) => {
      let colMatch = true;
      row.some((value: string, index: number, rowArray: string[]) => {
        // 横チェック
        if (index + 1 < row.length) {
          colMatch = (value !== '　' && value === rowArray[index + 1]);
          if (!colMatch) {
            return true;
          }
        }
      });
      if (colMatch) {
        winner = row[rowIndex][0];
        return true;
      }
    });
  }
  return winner;
};

// 縦揃い判定
const checkCol = (array: string[][]) => {
  let winner;
  for (let i = 0; i < array.length; i = i + 1) {
    let match = false;
    array.some((row, rowIndex) => {
      if (rowIndex + 1 < array.length) {
        match = (row[i] !== '　' && row[i] === array[rowIndex + 1][i]);
        if (!match) {
          return true;
        }
      }
    });
    if (match) {
      winner = array[0][i];
      break;
    }
  }
  return winner;
};

// 斜め揃い判定
const checkDiagonal = (array: string[][]) => {
  let diagonalMatchTop = false;
  let diagonalMatchBottom = false;
  for (let i = 0; i < array.length - 1; i = i + 1) {
    diagonalMatchTop = (array[i][i] !== '　' && array[i][i] === array[i + 1][i + 1]);
    if (!diagonalMatchTop) {
      break;
    }
  }
  for (let i = array.length - 1 ; i > 0; i = i - 1) {
    diagonalMatchBottom =
      (array[i][array.length - i - 1] !== '　'
        && array[i][array.length - i - 1] === array[i - 1][array.length - i]);
    if (!diagonalMatchBottom) {
      break;
    }
  }
  if (diagonalMatchTop) {
    return array[0][0];
  }
  if (diagonalMatchBottom) {
    return array[0][array.length - 1];
  }
  return null;
};

export default TutorialGame;
