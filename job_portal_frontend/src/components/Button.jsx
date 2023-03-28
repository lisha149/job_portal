import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Button = (props) => {
  return (
    <button className="bg-slate-500 hover:bg-slate-700  text-white xs:text-sm font-bold sm:py-2 sm:px-6 rounded-full xs:px-3 xs:py-2 sm:text-base">
      <span className="sm:text-base text-white md:mr-3 xs:text-sm xs:mr-2">
        <FontAwesomeIcon icon={props.icon} />
      </span>
      {props.name}
    </button>
  );
};

export default Button;
