import React from "react";
import { Link } from "react-router-dom";

const LinkK = (props) => {
  const { name, link } = props.route;
  return (
    <li className="mr-20">
      <Link to={link}> {name}</Link>
    </li>
  );
};

export default LinkK;
