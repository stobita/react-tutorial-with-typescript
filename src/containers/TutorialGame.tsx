import * as React from 'react';
import Board from '../components/Board';

interface TutorialGameProps {
  store: {
    value: string,
    squares: string[][],
    isFirst: boolean,
  };
}

interface TutorialGameState {
  value: string;
  squares: string[][];
  isFirst: boolean;
}

class TutorialGame extends React.Component<TutorialGameProps, TutorialGameState>{
  constructor(props: TutorialGameProps) {
    super(props);
    this.state = this.props.store;
  }
  // マスがクリックされたとき
  clickSquare(row: number,col: number) {
    const nowPlayer = this.state.isFirst ? '◯' : '×';
    const newArray = this.props.store.squares.slice();
    newArray[row][col] = nowPlayer;
    this.setState({
      squares: newArray,
      isFirst: !this.state.isFirst,
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

export default TutorialGame;
