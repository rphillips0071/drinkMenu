import React from 'react';
import './DrinkCard.css';

const DrinkCard = ({ drink }) => {
  return (
    <div className="drink-card">
      <h2 className="drink-name">{drink.name}</h2>
      <p className="drink-description">{drink.description}</p>
      <div className="ingredients">
        {drink.ingredients.map((ingredient, index) => (
          <span key={index} className="ingredient-tag">{ingredient}</span>
        ))}
      </div>
    </div>
  );
};

export default DrinkCard;
