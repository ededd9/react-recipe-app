import React from "react";

const Recipe = (props) => {
  return (
    <div>
      <img src={props.info.image} />
      {props.info.id} {props.info.title}
    </div>
  );
};

export default Recipe;
