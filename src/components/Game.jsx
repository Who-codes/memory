import React, { useEffect, useState } from "react";
import "./Game.css";
import Batman from "../assets/batman.svg";
import Cyclops from "../assets/cyclops.svg";
import Daredevil from "../assets/daredevil.svg";
import Deadpool from "../assets/deadpool.svg";
import Logan from "../assets/logan.svg";
import RoboCop from "../assets/robocop.svg";
import SingleCard from "./SingleCard";
import { Link } from "react-router-dom";

const cardsImg = [
  { src: Batman, matched: false },
  { src: Cyclops, matched: false },
  { src: Daredevil, matched: false },
  { src: Deadpool, matched: false },
  { src: Logan, matched: false },
  { src: RoboCop, matched: false },
];

const Game = () => {
  const [cards, setCards] = useState([]);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    shuffle();
  }, []);

  useEffect(() => {
    checkCards();
  }, [firstChoice, secondChoice]);

  const shuffle = () => {
    const shuffledCards = [...cardsImg, ...cardsImg]
      .sort(() => 0.5 - Math.random())
      .map((card) => {
        return { ...card, id: Math.random() };
      });

    setCards(shuffledCards);
    resetTurn();
  };

  const handleChoice = (card) => {
    firstChoice ? setSecondChoice(card) : setFirstChoice(card);
  };

  const checkCards = () => {
    if (firstChoice && secondChoice) {
      if (firstChoice.src === secondChoice.src) {
        console.log("matched");
        setCards((prevState) => {
          return prevState.map((card) => {
            if (firstChoice.src === card.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
      } else {
        console.log("no matched");
      }
      setTimeout(() => {
        resetTurn();
      }, 1000);
    }
  };

  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
  };

  return (
    <div className="game">
      {cards.map((card) => {
        return (
          <SingleCard
            card={card}
            key={card.id}
            handleChoice={handleChoice}
            isFlipped={
              card === firstChoice || card === secondChoice || card.matched
            }
          />
        );
      })}
      <div className="btn-container">
        <div className="btn" onClick={shuffle}>
          Restart
        </div>
        <div className="btn">
          <Link to={"/"}>Go back</Link>
        </div>
      </div>
    </div>
  );
};

export default Game;
