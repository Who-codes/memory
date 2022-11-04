import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to Memory Game</h2>
      <button className="btn">
        <Link to={"/game"}>Start Game</Link>
      </button>
    </div>
  );
};

export default Home;
