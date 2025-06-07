// src/App.jsx
import drinks from './assets/drinks.json';
import mocktails from './assets/nonAlcoholicDricnks.json'
import DrinkCard from './DrinkCard';
import './index.css';

function App() {
  return (
    <div className="app">
      <div className="wave-top" />

      <div className="drink-list">
        <h1 className="menu-title">Phillips Patio <br /> Drink Menu</h1>
        {drinks.map((drink, index) => (
          <div key={index} className="drink-item">
            <h2 className="drink-name">{drink.name}</h2>
            <p className="drink-description">{drink.description}</p>
            <p className="drink-ingredients">
              <strong>Ingredients:</strong> {drink.ingredients.join(', ')}
            </p>
            {index !== drinks.length - 1 && <hr className="divider" />}
          </div>
        ))}
      </div>

      <div className="drink-list">
        <h1 className="menu-title">Collins Corner</h1>
        {mocktails.map((drink, index) => (
          <div key={index} className="drink-item">
            <h2 className="drink-name">{drink.name}</h2>
            <p className="drink-description">{drink.description}</p>
            <p className="drink-ingredients">
              <strong>Ingredients:</strong> {drink.ingredients.join(', ')}
            </p>
            {index !== mocktails.length - 1 && <hr className="divider" />}
          </div>
        ))}
      </div>

      <div className="wave-bottom" />
    </div>
  );
}


export default App;
