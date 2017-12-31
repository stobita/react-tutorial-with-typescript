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
  render() {
    return (
      <div>
        <h1>{this.props.store.value}</h1>
        <Board squares={this.props.store.squares}/>
      </div>
    );
  }
}

export default TutorialGame;
