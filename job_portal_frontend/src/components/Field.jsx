import React from "react";

const Field = (props) => {
  return (
    <>
      <label
        htmlFor={props.name}
        className="font-semibold text-lg px-4 text-gray-500"
      >
        {props.Name}
      </label>
    </>
  );
};

export default Field;
