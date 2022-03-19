import React from "react";
import Recipe from "./Recipe";

function RecipeItem(props) {
  return (
    <>
      <h2>
        {props.recipeInfo.map((data) => (
          <Recipe info={data} key={data.id} />
        ))}
      </h2>
    </>
  );
}

export default RecipeItem;
