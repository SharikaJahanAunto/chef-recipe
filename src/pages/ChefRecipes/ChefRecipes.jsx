import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

function ChefRecipes() {
 const chef = useLoaderData()
 console.log(chef);
 
 

// useEffect(() =>{
//     fetch(`http://localhost:5000/recipes/${id}`)
//     .then(res=> res.json())
//     .then(data => setChef(data))
//     .catch(error => console.error(error))
// },[])

  if (!chef) {
    return <div>Loading...</div>;
  }

  const { chefName, chefPicture, chefBio, likes, numberOfRecipes, yearsOfExperience, recipes } = chef;

  return (
    <div>
        <h3>recipe file</h3>
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
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <p>{recipe.cookingMethod}</p>
            <div className="rating">{recipe.rating} stars</div>
            <button>{recipe.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChefRecipes;
