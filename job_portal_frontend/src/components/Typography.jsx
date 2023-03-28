import React from "react";

export const BoldTypography = (props) => {
  return (
    <span className=" text-gray-600 font-bold  xs:text-base sm:text-lg ">
      {props.title}
    </span>
  );
};
export const BoldestTypography = (props) => {
  return (
    <span className=" text-gray-700 font-bold xs:text-base sm:text-lg md:text-xl ">
      {props.title}
    </span>
  );
};
export const NormalTypography = (props) => {
  return (
    <span className=" text-gray-600 xs:texts-base sm:text-lg ">
      {" "}
      {props.value}
    </span>
  );
};
