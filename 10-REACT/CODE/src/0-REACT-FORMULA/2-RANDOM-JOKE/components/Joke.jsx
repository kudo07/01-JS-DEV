import React from 'react';

const Joke = (props) => {
  const { joke, showAnswer } = props;
  return (
    <div className="p-4 flex flex-col  items-center">
      <div className="text-3xl text-gray-600">{joke.question}</div>
      {showAnswer ? (
        <div className="mt-8 text-lg text-orange-500">{joke.answer}</div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Joke;
// items-center-hr

// justify-center-vr
// we ned to updates the state
