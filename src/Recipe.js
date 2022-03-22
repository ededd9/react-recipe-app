import React, { useState, useEffect } from "react";
import InstructionEach from "./InstructionEach";
const Recipe = (props) => {
  const [recipeUrl, setRecipeUrl] = useState("");
  const [instructions, setInstructions] = useState("");
  const [readyTime, setReadyTime] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${props.info.id}/information?apiKey=8da5a877b22645019ada07ae7bff4422&includeNutrition=false`
      );
      const data = await response.json();
      setReadyTime(data.readyInMinutes);
      setInstructions(data.analyzedInstructions[0].steps);
      setRecipeUrl(data.sourceUrl);
      console.log("testing", data);
    };
    fetchData();
  }, []);

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
      <div className="recipeContainer">
        <ul>
          <header className="recipe-name">
            {recipeCapitalize(props.info.title)}
          </header>
          <li>
            <img src={props.info.image} />
          </li>
          <li>
            <img
              src="https://img.icons8.com/windows/32/000000/timer.png"
              className="inner-icon"
            />
            {readyTime} minutes
          </li>
          <li>
            <img
              src="https://img.icons8.com/material-two-tone/24/000000/link--v1.png"
              className="inner-icon"
            />
            <a href={recipeUrl} target="_blank">
              {recipeUrl}
            </a>
          </li>
          <li>
            {instructions &&
              instructions.map((step) => (
                <InstructionEach key={step.number} step={step} />
              ))}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Recipe;
