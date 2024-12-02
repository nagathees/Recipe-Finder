import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import "./RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  const { addToFavorites } = useContext(AppContext);

  return (
    <div className="recipe-card">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>{recipe.strMeal}</h3>
      <div className="item1">
      <button onClick={() => addToFavorites(recipe)}>Add to Favorites</button>
      <button>
      <Link className="item2" to={`/recipe/${recipe.idMeal}`}>View Details</Link>
      </button>
      </div>
    </div>
  );
};

export default RecipeCard;