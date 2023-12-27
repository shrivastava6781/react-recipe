import React, { useState } from "react";
import "./Card.css";

const Card = ({ recipeList }) => {
  const [showIngredients, setShowIngredients] = useState(false);
  const [currentIngredients, setCurrentIngredients] = useState([]);

  const openIngredientsDialog = (index) => {
    setCurrentIngredients(recipeList[index].recipe.ingredientLines);
    setShowIngredients(true);
  };

  const closeIngredientsDialog = () => {
    setShowIngredients(false);
  };

  return (
    <div className="main-cards">
      {recipeList &&
        recipeList.map((recipeObj, index) => (
          <div className="card" key={index}>
            <div className="image">
              <img src={recipeObj.recipe.image} alt={recipeObj.recipe.label} />
            </div>
            <h5>{recipeObj.recipe.label}</h5>
            <div className="buttons">
              <button className="button ing" onClick={() => openIngredientsDialog(index)}>
                Ingredients
              </button>
              <button
                onClick={() => window.open(recipeObj.recipe.url)}
                className="button rec"
              >
                Full Recipe
              </button>
            </div>
          </div>
        ))}
      {showIngredients && (
        <div className="ingredients-dialog">
          <div className="ingredients-content">
            <h3>Ingredients</h3>
            <ul>
              {currentIngredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <button className="close-button" onClick={closeIngredientsDialog}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
