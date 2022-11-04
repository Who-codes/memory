import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <h1 className="logo">
        <Link to={"/"}>Memory Game</Link>
      </h1>
    </div>
  );
};

export default Nav;
