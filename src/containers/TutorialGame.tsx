import * as React from 'react';

interface TutorialGameProps {
  store: {
    value: string;
  };
}

const tutorialGame = (props: TutorialGameProps) => {
  return (
    <h1>{props.store.value}</h1>
  );
};

export default tutorialGame;
