import * as React from 'react';
import { render } from 'react-dom';
import TutorialGame from './containers/TutorialGame';
import store from './store';

class App extends React.Component {
  render() {
    return (
      <div>
        <TutorialGame store={store} />
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('app'),
);
