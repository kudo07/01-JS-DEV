import React from 'react';

const RecipeCard = (props) => {
  const { recipe } = props;
  return (
    <div className="m-8">
      <div className="py-4 text-3xl text-center text-orange-400 bg-black rounded-l-lg">
        {recipe.name}
      </div>
      <img
        className="object-cover w-[400px] h-[320px] rouded-b-lg"
        src={recipe.image_url}
      />
    </div>
  );
};

export default RecipeCard;
