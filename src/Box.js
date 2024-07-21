import React from "react";

const Box = ({ colorval, isblack,hex }) => {
  return (
    <section
      className="colorbox"
      style={{
        backgroundColor: colorval,
        color: isblack ? "#000" : "#FFF"
      }}
    >
      <p>{colorval ? colorval : "Enter color"}</p>
      <p>{hex ? hex : ""}</p>
    </section>
  );
};

export default Box;
