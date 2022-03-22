import "./App.css";
import { useState, useEffect } from "react";
import RecipeItem from "./RecipeItem";

function App() {
  const [userIngredient, setUserIngredient] = useState("");
  const [recipeData, setRecipeData] = useState(null);
  const [numOfRecipes, setNumOfRecipes] = useState(0);
  const getRecipeData = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=8da5a877b22645019ada07ae7bff4422&ingredients=${userIngredient}&number=${numOfRecipes}`
    );
    const data = await response.json();
    setRecipeData(data);
    setUserIngredient("");
    setNumOfRecipes(0);
    console.log("data here", data);
  };

  useEffect(() => {
    getRecipeData();
  }, []);

  return (
    <>
      <div className="App">
        <form className="form-control">
          <input
            value={userIngredient}
            type="text"
            onChange={(e) => setUserIngredient(e.target.value)}
            required
            placeholder="Search an ingredient"
          ></input>
          <select
            value={numOfRecipes}
            name="number"
            id="number"
            onChange={(e) => setNumOfRecipes(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button
            onClick={getRecipeData}
            className="icon"
            type="button"
          ></button>
        </form>
        {recipeData && <RecipeItem recipeInfo={recipeData} />}
      </div>
    </>
  );
}

export default App;
