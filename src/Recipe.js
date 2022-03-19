import React, { useState, useEffect } from "react";

const Recipe = (props) => {
  const [recipeUrl, setRecipeUrl] = useState("");

  useEffect(async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${props.info.id}/information?apiKey=8da5a877b22645019ada07ae7bff4422&includeNutrition=false`
    );
    const data = await response.json();
    setRecipeUrl(data.sourceUrl);
    console.log("testing", data);
  }, props.info.id);

  console.log(recipeUrl);
  function recipeCapitalize(recipeStr) {
    return recipeStr
      .split(" ")
      .map((word, index) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  }
  return (
    <>
      <div
        className="recipeContainer"
        // style={{
        //   backgroundImage: `url(${props.info.image})`,
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "center",
        // }}
      >
        <img src={props.info.image} />
        <button>Favorite</button>
        <ul>
          <li>Recipe Name: {recipeCapitalize(props.info.title)}</li>
          <li>Id of recipe: {props.info.id}</li>
          <li>Link to recipe:</li>
        </ul>
      </div>
    </>
  );
};

export default Recipe;
