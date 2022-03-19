import React from "react";
import Recipe from "./Recipe";

function RecipeItem(props) {
  return (
    <>
      <h3>
        <div className="container">
          {props.recipeInfo.map((data) => (
            <Recipe info={data} key={data.id} />
          ))}
        </div>
      </h3>
    </>
  );
}

export default RecipeItem;
