import * as React from 'react';

interface InformationProps{
  text: string;
}

const information = (props: InformationProps) => {
  if (props.text === undefined) {
    return null;
  }
  if (!props.text.match(/[◯×]/)) {
    return null;
  }
  return (
    <div>{props.text}の勝ちです。</div>
  );
};

export default information;
