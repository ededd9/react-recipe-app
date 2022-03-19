import "./App.css";
import { useState } from "react";
import RecipeItem from "./RecipeItem";

function App() {
  const [userIngredient, setUserIngredient] = useState("");
  const [recipeData, setRecipeData] = useState(null);
  const getRecipeData = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=8da5a877b22645019ada07ae7bff4422&ingredients=${userIngredient}&number=2`
    );
    const data = await response.json();
    setRecipeData(data);
    console.log("data here:", recipeData);
  };

  return (
    <>
      <div className="App">
        <input
          type="text"
          onChange={(e) => setUserIngredient(e.target.value)}
          required
          placeholder="Ingredient"
        ></input>
        <button onClick={getRecipeData}>Enter</button>
        {recipeData && <RecipeItem recipeInfo={recipeData} />}
      </div>
    </>
  );
}

export default App;
