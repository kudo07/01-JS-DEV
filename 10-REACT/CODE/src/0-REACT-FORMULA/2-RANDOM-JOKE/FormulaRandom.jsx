import React, { useEffect, useState } from 'react';
import Joke from './components/Joke';

const FormulaRandom = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [joke, setJoke] = useState('');

  const fetchJoke = () => {
    fetch('https://api.react-formula.com/learning-api/demos/random-joke/jokes')
      .then((res) => res.json())
      .then((data) => {
        setShowAnswer(false);
        setJoke(data);
      });
  };
  // Fetch joke when component mounts
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <Joke joke={joke} showAnswer={showAnswer} />
      <button
        onClick={() => setShowAnswer(!showAnswer)}
        className="bg-emerald-500 text-black rounded-2xl p-5"
      >
        {showAnswer ? 'hide ANSWER' : 'show ANSWER'}
      </button>
      <button
        className="bg-violet-500 text-yellow-100 rounded-2xl p-4 mt-4"
        onClick={fetchJoke}
      >
        new Joke
      </button>
    </div>
  );
};

export default FormulaRandom;
