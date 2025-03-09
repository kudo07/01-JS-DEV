import React, { useState } from 'react';
import RecipeCard from './components/RecipeCard';
// learning how to request data from a server the client request data and the server responds wiht daa
//https://api.react-formula.com/learning-api/demos/using-fetch/recipes
const FormulaFetch = () => {
  const [data, setData] = useState('');
  const fetchRecipe = () => {
    fetch(
      'https://api.react-formula.com/learning-api/demos/using-fetch/recipes'
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <RecipeCard recipe={data} />
      <button
        onClick={fetchRecipe}
        className="rounded px-4 py-2 bg-blue-400 text-white"
      >
        Get random recipe
      </button>
    </div>
  );
};

export default FormulaFetch;
