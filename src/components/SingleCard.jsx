import React from "react";
import Cover from "../assets/react.svg";
import "./SingleCard.css";

const SingleCard = ({ card, handleChoice, isFlipped }) => {
  const handleClick = () => {
    handleChoice(card);
    console.log(isFlipped);
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className={isFlipped ? "flip" : "flipped flip"}>
        <img src={card.src} alt="front card" className="front" />
        <img src={Cover} alt="back card" className="back" />
      </div>
    </div>
  );
};

export default SingleCard;
