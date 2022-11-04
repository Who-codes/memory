import React, { useEffect, useState } from "react";
import "./Game.css";
import Batman from "../assets/batman.svg";
import Cyclops from "../assets/cyclops.svg";
import Daredevil from "../assets/daredevil.svg";
import Deadpool from "../assets/deadpool.svg";
import Logan from "../assets/logan.svg";
import RoboCop from "../assets/robocop.svg";
import SingleCard from "./SingleCard";

const cardsImg = [Batman, Cyclops, Daredevil, Deadpool, Logan, RoboCop];

const Game = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    shuffle();
  }, []);

  const shuffle = () => {
    const shuffledCards = [...cardsImg, ...cardsImg]
      .sort(() => 0.5 - Math.random())
      .map((card) => {
        return <SingleCard card={card} key={Math.random()} />;
      });

    setCards(shuffledCards);
  };

  return (
    <div className="game">
      {cards}
      <div className="btn-container">
        <div className="btn">Restart</div>
        <div className="btn">Go back</div>
      </div>
    </div>
  );
};

export default Game;
