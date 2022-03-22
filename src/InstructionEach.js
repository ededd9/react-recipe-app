import React from "react";
import Recipe from "./Recipe";
const InstructionEach = (props) => {
  return (
    <>
      <p>
        <span style={{ color: "black", fontSize: "18px" }}>
          Step {props.step.number}{""}-{">"}
        </span>
        {props.step.step}
      </p>
    </>
  );
};

export default InstructionEach;
