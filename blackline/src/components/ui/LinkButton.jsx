import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ to, children, className, ...rest }) => {
  return (
    <Link to={to} className={`btn ${className}`} {...rest}>
      {children}
    </Link>
  );
};

export default LinkButton;
