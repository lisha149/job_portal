import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <li className="lg:text-xl md:text-lg nav-link">
      <Link
        onClick={props.toggle}
        to={props.route}
        className="text-gray-800 hover:text-gray-400 duration-500"
      >
        {props.name}
      </Link>
    </li>
  );
};

export default Nav;
