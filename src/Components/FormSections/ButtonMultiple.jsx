import React from "react";

function ButtonMultiple({
  input: { onChange, value },
  meta: { touched, error },
  myTitle,
}) {
  return (
    <>
      <h1>{myTitle}</h1>
      <button
        type="button"
        style={{ backgroundColor: value === "cow" ? "blue" : "unset" }}
        onClick={() => onChange("cow")}
      >
        Cow
      </button>
      <button
        type="button"
        style={{ backgroundColor: value === "horse" ? "blue" : "unset" }}
        onClick={() => onChange("horse")}
      >
        horse
      </button>
      <button
        type="button"
        style={{ backgroundColor: value === "fish" ? "blue" : "unset" }}
        onClick={() => onChange("fish")}
      >
        fish
      </button>
    </>
  );
}

export default ButtonMultiple;
