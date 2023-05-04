import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './ChefRecipes.css'

function ChefRecipes() {
  const chef = useLoaderData()
  console.log(chef);
  
  if (!chef) {
    return <div>Loading...</div>;
  }

  const { chefName, chefPicture, chefBio, likes, numberOfRecipes, yearsOfExperience, recipes } = chef;

  // Add state for favorite button
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const handleFavoriteClick = (recipe) => {
    // Show toast message
    alert(`"${recipe.name}" is your favorite recipe!`);

    // Add recipe to favoriteRecipes state and disable button
    setFavoriteRecipes([...favoriteRecipes, recipe]);
  }

  return (
    <div className='mx-auto text-center'>
      <div className="banner">
        <img src={chefPicture} alt={chefName} />
        <div className="info">
          <h2>{chefName}</h2>
          <p>{chefBio}</p>
          <div className="stats"> 
            <div className="likes">{likes} likes</div>
            <div className="recipes">{numberOfRecipes} recipes</div>
            <div className="experience">{yearsOfExperience} years of experience</div>
          </div>
        </div>
      </div>
      <div className="recipes">
        {recipes?.map((recipe) => (
          <div key={recipe.name} className="recipe">
            <h3>{recipe.name}</h3>
            <ul>
              {recipe.ingredients?.map((ingredient, index) => (
                <p key={index}>{ingredient}</p>
              ))}
            </ul>
            <p>{recipe.cookingMethod}</p>
            <div className="rating">{recipe.rating} stars</div>
            <button onClick={() => handleFavoriteClick(recipe)} disabled={favoriteRecipes.includes(recipe)}>
              {favoriteRecipes.includes(recipe) ? 'Added to Favorites' : 'Add to Favorites'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChefRecipes;
