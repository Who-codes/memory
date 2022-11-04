import React from "react";
import Cover from "../assets/react.svg";
import "./SingleCard.css";

const SingleCard = ({ card }) => {
  return (
    <div className="cards">
      <img src={Cover} alt="back card" className="back" />
      <img src={card} alt="front card" className="front" />
    </div>
  );
};

export default SingleCard;
