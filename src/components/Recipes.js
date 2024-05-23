import React, { useState } from "react";
import axios from "axios";

const Recipes = () => {
  const [meals, setMeals] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showRecipe, setShowRecipe] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`;

  const getMealList = async () => {
    try {
      const response = await axios.get(apiUrl);
      const { meals } = response.data;
      setMeals(meals);
    } catch (error) {}
  };

  const getMealRecipe = async (idMeal) => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );

      setSelectedMeal(response.data.meals[0]);
      setShowRecipe(true);
    } catch (error) {}
  };

  return (
    <div className="recipe-container">
      <div className="meal-wrapper">
        <div className="meal-search">
          <h2 className="title">Find Meals For Your Ingredients</h2>
          <blockquote className="quote">
            <em>A good meal is love made visible.</em>
            <br />
          </blockquote>
          <div className="meal-search-box">
            <input
              type="text"
              className="search-control"
              placeholder="Enter an ingredient"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="search-btn btn" onClick={getMealList}>
              search
            </button>
          </div>
        </div>
        <div className="meal-result">
          {meals &&
            meals.map((meal) => (
              <div className="meal-item" key={meal.idMeal}>
                <div className="meal-img">
                  <img src={meal.strMealThumb} alt="food" />
                </div>
                <div className="meal-name">
                  <h3>{meal.strMeal}</h3>
                  <button
                    className="recipe-btn"
                    onClick={() => getMealRecipe(meal.idMeal)}
                  >
                    Get Recipe
                  </button>
                </div>
              </div>
            ))}
        </div>

        {showRecipe && selectedMeal && (
          <div className="meal-details">
            <button
              className="btn recipe-close-btn"
              onClick={() => setShowRecipe(false)}
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="meal-details-content">
              <h2 className="recipe-title">{selectedMeal.strMeal}</h2>
              <p className="recipe-category">{selectedMeal.strCategory}</p>
              <div className="recipe-instruct">
                <h3>Instructions:</h3>
                <p>{selectedMeal.strInstructions}</p>
              </div>
              <div className="recipe-meal-img">
                <img src={selectedMeal.strMealThumb} alt="" />
              </div>
              <div className="recipe-link">
                <a
                  href={selectedMeal.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Video
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipes;
