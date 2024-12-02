import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/UseFetch";
import "./RecipeDetails.css";

const RecipeDetails = () => {
    const {id} = useParams();
    const {data, loading, error} = useFetch(
       `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );

    if (loading) return <p>LOading...</p>;
    if (error) return <p>{error}</p>;

    const recipe = data.meals[0];

    return(
        <div className="recipe">
            <h1>{recipe.strMeal}</h1>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        
            <p>{recipe.strInstructions}</p>
         
        </div>
    );
};

export default RecipeDetails;