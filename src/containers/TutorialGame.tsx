import * as React from 'react';
import Board from '../components/Board';

interface TutorialGameProps {
  store: {
    value: string;
    squares: string[][]
  };
}

class TutorialGame extends React.Component<TutorialGameProps>{
  constructor(props: TutorialGameProps) {
    super(props);
    this.state = this.props.store;
  }
  clickSquare(row: number,col: number) {
    this.setState({
      store: {
        square: this.props.store.squares[row][col] = '◯',
      },
    });
  }
  render() {
    console.log(this.props.store.squares);
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
